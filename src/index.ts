import mocha from 'mocha/mocha';
import { Runner } from 'mocha';
import chai from 'chai';
import * as Babel from '@babel/standalone';
import protect from '@freecodecamp/loop-protect';
import {
  CallbackConsole,
  CurrentSuite,
  Reject,
  Resolve,
  ResultMocha,
  Suites,
  TestWithError,
  WindowWithChai,
} from './types';
import { mockWindowFunction } from './utils';

declare let window: WindowWithChai;
window.chai = chai;

const {
  EVENT_RUN_BEGIN,
  EVENT_RUN_END,
  EVENT_TEST_FAIL,
  EVENT_TEST_PASS,
  EVENT_SUITE_BEGIN,
  EVENT_SUITE_END,
} = mocha.Mocha.Runner.constants;

class ReporterFactory {
  static resolve: Resolve;
  static reject: Reject;

  constructor(runner: Runner) {
    getReporter(runner);
  }

  static setResolve(resolve: Resolve) {
    this.resolve = resolve;
  }
  static getResolve() {
    return this.resolve;
  }

  static setReject(reject: Reject) {
    this.reject = reject;
  }

  static getReject() {
    return this.reject;
  }
}

class Reporter {
  test: {
    passed: number;
    failed: number;
    total: number;
    suites: Suites;
  };
  currentSuite: CurrentSuite;

  constructor(resolve: Resolve, runner: Runner) {
    const stats = runner.stats;
    this.test = {
      passed: 0,
      failed: 0,
      total: 0,
      suites: [],
    };
    this.currentSuite = [];
    runner
      .once(EVENT_RUN_BEGIN, () => {})
      .on(EVENT_SUITE_BEGIN, () => {})
      .on(EVENT_SUITE_END, () => {
        this.test.suites.push(this.currentSuite);
        this.currentSuite = [];
      })
      .on(EVENT_TEST_PASS, (test: TestWithError) => {
        this.test.total++;
        this.test.passed++;
        this.currentSuite.push(test);
      })
      .on(EVENT_TEST_FAIL, (test: TestWithError, err: Error) => {
        this.test.total++;
        this.test.failed++;
        test.error = err;
        this.currentSuite.push(test);
      })
      .once(EVENT_RUN_END, () => {
        resolve(this.test);
      });
  }
}

function getReporter(runner: Runner) {
  return new Reporter(ReporterFactory.getResolve(), runner);
}

const timeout = 1500;
Babel.registerPlugin(
  'loopProtection',
  protect(timeout, () => {
    ReporterFactory.getReject()('timeout');
  }),
);

const transform = (source: string) =>
  Babel.transform(source, {
    plugins: ['loopProtection'],
  }).code;

let code = '';
let tests = '';

mocha.setup({
  ui: 'bdd',
  cleanReferencesAfterRun: false,
  reporter: ReporterFactory,
  timeout: 2000,
});

function run(getConsoleLog: CallbackConsole): Promise<ResultMocha> {
  return new Promise((resolve, reject) => {
    ReporterFactory.setResolve(resolve);
    ReporterFactory.setReject(reject);
    eval(`
      const { expect } = chai;
      ${transform(code)};
      ${tests};
      mocha.run();
    `);
  });
}

function reset(): void {
  code = '';
  tests = '';
  if (mocha.suite) {
    if (mocha.suite.suites) mocha.suite.suites.splice(0);
    if (mocha.suite.tests) mocha.suite.tests.splice(0);
  }
  if (mocha._previousRunner) {
    delete mocha._previousRunner;
  }
}

function loadCode(c: string): void {
  code = c;
}

function loadTests(t: string): void {
  tests = t;
}

/**
 * runTests: runs the tests to the code
 * @param {string} code code to be tested
 * @param {string} tests test code
 * @param {CallbackConsole} callbackConsole function that will overwrite the console and capture the outputs of the tested code
 * @returns {Promise<ResultMocha>} test results
 */
function runTests(code: string, tests: string, getConsoleLog?: CallbackConsole): Promise<ResultMocha> {
  reset();
  loadCode(code);
  loadTests(tests);
  return run(getConsoleLog);
}

export { runTests };
