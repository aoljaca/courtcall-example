set -e 


echo 'NPM Install'
npm install

echo 'Build'
npm run build:prod

echo 'Upload'
aws s3 sync --delete dist/ s3://www.dev.ccv3dev.com/
aws create-invalidation --distribution-id=E18U0IWTM9CD00 --paths=index.html