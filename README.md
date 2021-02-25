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
    /* This function will pass the first test but not the second */
    function testedFunction (param) {
      return 10;
    }
  `;

  const testCode = `
    describe('testedFunction', () => {
      it('should return the passed parameter (10)', () => {
        const param = 10;

        const result = testedFunction(param);

        expect(result).to.be(param);
      });
      
      it('should return the passed parameter (20)', () => {
        const param = 20;

        const result = testedFunction(param);

        expect(result).to.be(param);
      });
    });
  `;

  const result = await mochaAsPromised.runTests(code, testCode);

  /*
   * Will return an object with the following format:
   * {
   *   failed: 1
   *   passed: 1,
   *   suites: [
   *     [
   *       {
   *         type: 'test',
   *         title: 'should return the passed parameter (10)',
   *         state: 'passed',
   *       },
   *       {
   *         type: 'test',
   *         title: 'should return the passed parameter (20)',
   *         state: 'failed',
   *         error: {
   *           actual: 10,
   *           expected: 20,
   *           message: 'expected 10 to equal 20',
   *           operator: 'strictEqual',
   *           stack: <Error Stack Trace>
   *         }
   *       }
   *     ]
   *   ]
   * }
   */
}
```
