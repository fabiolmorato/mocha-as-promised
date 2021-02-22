# mocha-as-promised
A mocha.js and chai wrapper that delivers a promise-based API to get test results instead of only printing. Created for Responde Aí's Bootcamp students use on their own Code LMS platform project.

This library is **UNSAFE** as it uses `eval` to load the code and the test code (check out Usage to understand why).

### Usage

Install the package:

```sh
npm install @bootcamp-ra/mocha-as-promised
# or if using yarn
yarn add @bootcamp-ra/mocha-as-promised
```

This module exports a single function:

- runTests
  receives two strings: the code being tested and the test code
  returns a promise that resolves to the test results

```js
  import mochaAsPromised from '@bootcamp-ra/mocha-as-promised';

  async function main () {
    const code = `
      function testedFunction (param) {
        return param;
      }
    `;

    const testCode = `
      describe('testedFunction', () => {
        it('should return the passed parameter', () => {
          const param = 10;

          const result = testedFunction(param);

          expect(result).to.be(param);
        });
      });
    `;

    const result = await mochaAsPromised.runTests(code, testCode);
  }
```

### 
