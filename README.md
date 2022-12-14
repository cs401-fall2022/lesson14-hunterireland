# Typescript Hello world

This is a hello world showing typescript in the browser and jest unit testing.

## Build

To build the project run `npm run compile`. The results will be in the build
directory.

```
$ npm run compile

> hello_world@1.0.0 compile
> tsc

$ ls build
__tests__  app.js     app.js.map
```

## Test

This sample is setup to use the jest testing framework. Run `npm test` to run
the tests.

```
$npm test
> hello_world@1.0.0 test
> npm run compile && npm run unit


> hello_world@1.0.0 compile
> tsc


> hello_world@1.0.0 unit
> jest

 PASS  __tests__/test.app.ts
  sum module
    ✓ returns the string hello (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.724 s, estimated 1 s
Ran all test suites.
```

## HTML

The content of index.html is a cursory overview of TypeScript and is meant as a quick five minute read to give developers a feel for the language. To have some extra fun, click on the title of the page and watch it start to flash!
