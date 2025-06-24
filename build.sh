npm install
npm run build
cp -r dist/* .
git add .
git commit -m "Deploy built site"
git push origin main
