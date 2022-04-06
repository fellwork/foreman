import process from 'node:process';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath, URL } from 'node:url';

// Path constants
export const dirSep = path.sep;
export const altDirSep = '\\';
export const urlSep = '://';
export const backslashRegExp = /\\/g;
const isFile = (type: any) => type === 'isFile';
const isDirectory = (type: any) => type === 'isDirectory';

// Path utilities
/* Is the character a directory separator? */
export const isDirSep = (charCode: number): boolean =>
  charCode === path.sep.charCodeAt(0) || charCode === path.sep.charCodeAt(1);
/* Does a path start with a URL */
export const startsWithUrl = (path: string) => {};

// Path mapping
const checkPathType = (type: string) => {
  if (type in pathTypeMap) {
    return;
  }
  throw new Error(`Unknown path type: ${type}`);
};
type PathTypeTest = (type: any) => boolean;

export interface PathTypeMap {
  [type: string]: PathTypeTest;
}

export const pathTypeMap: PathTypeMap = Object.freeze({
  file: isFile,
  directory: isDirectory
}) as PathTypeMap;

function locate() {}
