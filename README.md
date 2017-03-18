# lie-ts

lie is a small, performant promise library implementing the [Promises/A+ spec](http://promises-aplus.github.com/promises-spec/) (Version 1.1).

Originally a fork of [Ruben Verborgh](https://github.com/RubenVerborgh)'s [promiscuous](https://github.com/RubenVerborgh/promiscuous), with version 2.6 it became a fork of [ayepromise](https://github.com/cburgmer/ayepromise) by [Chris Burgmer](https://github.com/cburgmer).

... and now it's been forked again, converted to typescript, and has the ability to do this now:
```ts
new Promise(function(res, rej) {
    res(1,2,3);
}).then(function(v1,v2,v3) {
    console.log(v1,v2,v3) // <= 1, 2, 3
})
```

And it's smaller than the original, only 1.8 Kb gzipped. 

```bash
npm install lie-ts
```

```javascript
var Promise = require('lie-ts');
```

## Usage

Grab the file from the dist folder:
- lie-ts.min.js exposes 'Promise' either as a UMD module or from the global scope, depending on if a CJS or AMD loader is available.

## API

Implements the standard ES6 api:

```js
new Promise(function(resolve, reject){
    doSomething(function(err, result) {
        if (err) {
            reject(err);
        } else {
            resolve(result);
        }
    });
}).then(function (value) {
    //on success
}, function (reason) {
    //on error
}).catch(function (reason) {
    //shortcut for error handling
});

Promise.all([
    //array of promises or values
]).then(function ([/* array of results */]));

Promise.race([
    //array of promises or values
]);
// either resolves or rejects depending on the first value to do so
```

## Unhandled Rejections

In Node.js, lie emits an `unhandledRejection` event when a rejected promise isn't caught, in line with [how io.js does it](https://iojs.org/api/process.html#process_event_unhandledrejection). This allows it to act as a promise shim in both Node.js and the browser.
