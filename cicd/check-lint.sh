set -e 
source ~/.bashrc
npm ci
npm run lint:cicd
npm run build:dev