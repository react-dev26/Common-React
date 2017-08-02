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

bucket="cmnstg-$(git symbolic-ref --short HEAD)"
bucket=`echo $bucket | sed 's/\//-/g' | tr '[:upper:]' '[:lower:]'`
set -exo pipefail
ensure_bucket "$bucket"

bob_say () {
  curl -X POST --data-urlencode "payload={\"channel\": \"#website-deployments\", \"username\": \"Bob\", \"text\": \"$1\", \"icon_emoji\": \":bob-ross:\"}" https://hooks.slack.com/services/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
}

if [ "$CONTENT_BUILD" = true ]; then
  bob_say "Hi, I am Bob. Dev team asked me to notify you about content changes on the staging website."
  echo '#########################################'
  echo 'Detected contentful deployment type.'
  echo 'Taking the latest code from master...'
  git fetch origin master
  git merge FETCH_HEAD
  echo '#########################################'

  # using staging only in this case to make sure that other PRs use latest code
  # from production, since contentful staging space is a sandbox for marketing team
  # and can significantly differ from production state
  CONTENTFUL_ACCESS_TOKEN="$CONTENTFUL_STAGING_ACCESS_TOKEN" CONTENTFUL_SPACE_ID="$CONTENTFUL_STAGING_SPACE_ID" ENVIRONMENT=staging yarn run build
else
  CONTENTFUL_ACCESS_TOKEN="$CONTENTFUL_PRODUCTION_ACCESS_TOKEN" CONTENTFUL_SPACE_ID="$CONTENTFUL_PRODUCTION_SPACE_ID" ENVIRONMENT=staging yarn run build
fi

ENVIRONMENT=staging BUCKET=$bucket node -r dotenv/config syncS3.js

if [ "$CONTENT_BUILD" = true ]; then
  bob_say "Finally! <@$REQUESTOR_NAME|user>, the staging website is updated with new content. Take a look: http://cmnstg-contentful-staging.s3-website-us-east-1.amazonaws.com/"
fi
