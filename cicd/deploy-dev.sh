set -e 

cd .. 

echo 'NPM Install'
npm install

echo 'Build'
npm run build:prod

echo 'Upload'
aws s3 sync --delete dist/ s3://www.dev.ccv3dev.com/
aws s3 cp s3://www.dev.ccv3dev.com/index.html s3://www.dev.ccv3dev.com/index.html --metadata-directive REPLACE --cache-control max-age=0 --content-type text/html