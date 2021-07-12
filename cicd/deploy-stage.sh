set -e 
source ~/.bashrc

echo 'NPM Install'
npm ci

echo 'Build'
npm run build:stage
echo 'Upload'
aws s3 sync --delete dist/ s3://www.stage.ccv3dev.com/
aws cloudfront create-invalidation --distribution-id=E2UTHZ5OQGUQFS --paths=/index.html

