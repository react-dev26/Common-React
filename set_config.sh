#!/bin/bash

mkdir ~/.aws;
echo "access_key_id: $AWS_ACCESS_KEY_ID" >> ~/.aws/cmn-website.yml;
echo "secret_access_key: $AWS_SECRET_ACCESS_KEY" >> ~/.aws/cmn-website.yml;