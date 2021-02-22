import mocha from "mocha/mocha";
import chai from "chai";
import transformRemoveConsole from "babel-plugin-transform-remove-console";
import * as Babel from "@babel/standalone";
import protect from "@freecodecamp/loop-protect";

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
  constructor(...args) {
    getReporter(...args);
  }
  static setResolve(resolve) {
    this.resolve = resolve;
  }
  static getResolve() {
    return this.resolve;
  }

  static setReject(reject) {
    this.reject = reject;
  }

  static getReject() {
    return this.reject;
  }
}

class Reporter {
  constructor(resolve, runner) {
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
      .on(EVENT_TEST_PASS, (test) => {
        this.test.total++;
        this.test.passed++;
        this.currentSuite.push(test);
      })
      .on(EVENT_TEST_FAIL, (test, error) => {
        this.test.total++;
        this.test.failed++;
        test.error = error;
        this.currentSuite.push(test);
      })
      .once(EVENT_RUN_END, () => {
        resolve(this.test);
      });
  }
}

function getReporter(...args) {
  return new Reporter(ReporterFactory.getResolve(), ...args);
}

const timeout = 1500;
Babel.registerPlugin(
  "loopProtection",
  protect(timeout, () => {
    ReporterFactory.getReject()("timeout");
  })
);

Babel.registerPlugin(
  "babel-plugin-transform-remove-console",
  transformRemoveConsole
);

const transform = (source) =>
  Babel.transform(source, {
    plugins: ["loopProtection", "babel-plugin-transform-remove-console"],
  }).code;

let code = "";
let tests = "";

mocha.setup({
  ui: "bdd",
  cleanReferencesAfterRun: false,
  reporter: ReporterFactory,
  timeout: 2000,
});

function run() {
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

function reset() {
  code = "";
  tests = "";
  if (mocha.suite) {
    if (mocha.suite.suites) mocha.suite.suites.splice(0);
    if (mocha.suite.tests) mocha.suite.tests.splice(0);
  }
  if (mocha._previousRunner) {
    delete mocha._previousRunner;
  }
}

function loadCode(c) {
  code = c;
}

function loadTests(t) {
  tests = t;
}

/**
 * runTests: runs the tests to the code
 * @param {string} code code to be tested 
 * @param {string} tests test code
 * @returns {Promise<Object>} test results
 */
function runTests(code, tests) {
  reset();
  loadCode(code);
  loadTests(tests);
  return run();
}

export { runTests };
