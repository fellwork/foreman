import { colors, format } from './_api';

const emptySquare = '\u25A2'; // '\u25A2' ▢
const square = '\u25A0'; // '\u25A0' ■
const triangle = '\u25B2'; // '\u25B2' ▲

type Label = 'info' | 'error' | 'warn';

export interface Logger {
  // useVerbose: boolean
  verbose: (...args: any[]) => void;
  info: (...args: any[]) => void;
  warn: (...args: any[]) => void;
  error: (...args: any[]) => void;
}

function _log(label: Label, symbol: string, ...args: any[]): void {
  const dateFormat = 'kk:mm:s';
  const dateTime = new Date();
  const timestamp = colors.gray(`[${format(dateTime, dateFormat)}]`);
  return console[label](timestamp, symbol, ...args);
}

export const log: Logger = {
  // useVerbose: !!argv.verbose,

  verbose(...args: any[]): void {
    // if (log.useVerbose) {
    _log('info', colors.gray(emptySquare), ...args);
    //  }
  },

  info(...args: any[]): void {
    _log('info', colors.green(square), ...args);
  },

  warn(...args: any[]): void {
    _log('warn', colors.yellow(triangle), ...args);
  },

  error(...args: any[]): void {
    _log('error', colors.red(triangle), ...args);
  }
};
