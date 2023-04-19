set -e
npm run build
cd dist
echo > .nojekyll
git init
git checkout -B main
git add -A
git commit -m 'deploy'
git push -f git@github.com:Cito2310/react-ts-drink-app-2.git main:gh-pages

cd -