npm install mocha ts-node -g
npm install mocha @types/mocha chai @types/chai --save-dev

mocha -r ts-node/register *.tests.ts
mocha --watch-extensions ts --watch -R min tests/*.tests.ts