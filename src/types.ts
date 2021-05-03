import { Test } from 'mocha';

export interface ResultMocha {
  passed: number;
  failed: number;
  total: number;
  suites: Suites;
}

export interface TestWithError extends Test {
  error?: Error;
}

export type Error = {
  expected?: any;
  actual?: any;
  message?: string;
  operator?: string;
  showDiff?: boolean;
  stack?: string;
};

export type CurrentSuite = Array<TestWithError>;

export type Suites = Array<CurrentSuite>;

export type Resolve = (value: unknown) => void;
export type Reject = (reason?: any) => void;

export type CallbackConsole = (value: any) => void;

export interface WindowWithChai extends Window {
  chai: Chai.ChaiStatic | any;
}