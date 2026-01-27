#!/bin/bash
set -e

# Configuration
S3_BUCKET="themovingtarget.ai"
CLOUDFRONT_DISTRIBUTION_ID="E33AT72S60BCCL"
APP_DIR="$(dirname "$0")/app"

echo "Building site..."
cd "$APP_DIR"
npm run build

echo "Uploading to S3..."
aws s3 sync dist/ s3://$S3_BUCKET \
  --delete \
  --cache-control "max-age=31536000,public" \
  --exclude "index.html"

aws s3 cp dist/index.html s3://$S3_BUCKET/index.html \
  --cache-control "no-cache,no-store,must-revalidate"

echo "Invalidating CloudFront cache..."
aws cloudfront create-invalidation \
  --distribution-id $CLOUDFRONT_DISTRIBUTION_ID \
  --paths "/*" \
  --query 'Invalidation.Id' \
  --output text

echo "Done! Site will update within 1-2 minutes."
echo "https://www.themovingtarget.ai"
