set -e 
source ~/.bashrc
export AWS_DEFAULT_REGION=us-east-1
echo 'NPM Install'
npm ci

echo 'Build'
npm run build:dev

echo 'Upload'
aws s3 sync --delete dist/ s3://www.dev.ccv3dev.com/
aws cloudfront create-invalidation --distribution-id=E18U0IWTM9CD00 --paths=/index.html

