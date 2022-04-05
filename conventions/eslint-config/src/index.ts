import * as configs from './configs';
import ignorePatterns from './ignore';

import type { Linter } from 'eslint';

interface IConfigFn {
  (extend: Linter.Config): Linter.Config;
  path: string;
}

type ConfigFunctions = {
  [K in keyof typeof configs]: IConfigFn;
};

const base = {
  root: true,
  ignorePatterns
};

export = Object.entries(configs).reduce((acc, [key, val]) => {
  const curKey = key as keyof typeof configs;
  const fn: IConfigFn = (extend: Linter.Config) => ({
    extends: val,
    ...base,
    ...extend
  });
  fn.path = val;
  acc[curKey] = fn;
  return acc;
}, {} as ConfigFunctions);
