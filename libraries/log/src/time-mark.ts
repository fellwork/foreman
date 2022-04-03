import { hrtime } from 'node:process';

export interface TimeMarkSeconds {
  seconds: number;
  milliseconds: number;
  nanoseconds: bigint;
}

export const timeMarkHR = (): bigint => hrtime.bigint();

const convertSeconds = (time?: bigint): number => Number((time ?? timeMarkHR()) / BigInt(1e9));
const convertMilliseconds = (time?: bigint): number => Number((time ?? timeMarkHR()) / BigInt(1e6));
const convertNanoseconds = (time?: bigint): bigint => time ?? timeMarkHR();

/**
 * Convert hrtime mark to seconds, milliseconds, and nanoseconds
 * @param timeMark - Raw time measure in nanoseconds
 * @returns TimeMeasure
 */

export function timeMark(time?: bigint): TimeMarkSeconds {
  return {
    seconds: convertSeconds(time),
    milliseconds: convertMilliseconds(time),
    nanoseconds: convertNanoseconds(time)
  };
}

console.log(timeMark().milliseconds);
