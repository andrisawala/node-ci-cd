echo "Kill all the running PM2 actions"
sudo pm2 kill

echo "Update app from Git"
git pull

echo "Install app dependencies"
sudo rm -rf node_modules yarn-lock.json
sudo yarn install

echo "Run PM2 Server"
sudo pm2 start index.js --name test
