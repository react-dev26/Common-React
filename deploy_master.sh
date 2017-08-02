#!/bin/bash

ensure_bucket () {
  s3_path="s3://$1"
  echo "Ensuring bucket $s3_path"
  if aws s3 ls | grep "$1"
  then
    echo 'Bucket already exists.'
  else
    echo "Creating bucket $s3_path..."
    aws s3 mb "$s3_path" --region us-east-1
    aws s3 website "$s3_path" --index-document index.html --error-document 404/index.html
  fi
}

bucket="cmnstg-temp-master-staging"
set -exo pipefail
ensure_bucket "$bucket"

bob_say () {
  curl -X POST --data-urlencode "payload={\"channel\": \"#website-deployments\", \"username\": \"Bob\", \"text\": \"$1\", \"icon_emoji\": \":bob-ross:\"}" https://hooks.slack.com/services/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
}

install_contentful_dependencies () {
  echo 'Installing dependencies for Contentful data operations.'
  yarn global add contentful-import
  yarn global add contentful-export
}

prepare_production_content_backup () {
  echo 'Preparing production content backup...'
  contentful-export --space-id $CONTENTFUL_PRODUCTION_SPACE_ID --management-token $CONTENTFUL_MANAGEMENT_TOKEN
  CONTENTFUL_BACKUP_FILE=$(find . -name "contentful-export-$CONTENTFUL_PRODUCTION_SPACE_ID*")
  CONTENTFUL_BACKUP_FILE=${CONTENTFUL_BACKUP_FILE:2}
  aws s3 mv "$CONTENTFUL_BACKUP_FILE" "s3://common-contentful-backups/$CONTENTFUL_BACKUP_FILE"
}

move_staging_content_into_production () {
  echo 'Exporting content from staging...'
  contentful-export --space-id $CONTENTFUL_STAGING_SPACE_ID --management-token $CONTENTFUL_MANAGEMENT_TOKEN
  CONTENTFUL_FILE=$(find . -name "contentful-export-$CONTENTFUL_STAGING_SPACE_ID*")

  echo 'Importing content to production...'
  contentful-import --space-id $CONTENTFUL_PRODUCTION_SPACE_ID --management-token $CONTENTFUL_MANAGEMENT_TOKEN --content-file $CONTENTFUL_FILE
}

back_up_production_bucket() {
  shortened_sha=`git rev-parse --short HEAD`
  bucket_name="s3://cmn-prod-backup-ci-build-${CIRCLE_BUILD_NUM}-${shortened_sha}"
  aws s3 mb $bucket_name
  aws s3 sync s3://www.common.com $bucket_name --quiet
}

set -exo pipefail

# back_up_production_bucket

if [ "$CONTENT_BUILD" = true ]; then
  bob_say "Wow, I just noticed that production deployment is almost ready. Importing and backing up Contentful data to production..."
  echo '#########################################'
  install_contentful_dependencies
  prepare_production_content_backup
  move_staging_content_into_production
  echo '#########################################'
  bob_say "Contentful data is backed up and good to go! Beginning the build into production! Please, wait a bit more. It takes time to deploy the website."
fi

CONTENTFUL_ACCESS_TOKEN="$CONTENTFUL_PRODUCTION_ACCESS_TOKEN" CONTENTFUL_SPACE_ID="$CONTENTFUL_PRODUCTION_SPACE_ID" ENVIRONMENT=production yarn run build
ENVIRONMENT=production BUCKET=$bucket node -r dotenv/config syncS3.js

if [ "$CONTENT_BUILD" = true ]; then
  bob_say "Woohoo :tada: :carlton2:! <@$REQUESTOR_NAME|user>, your new content is now in production! https://www.common.com/"
fi
