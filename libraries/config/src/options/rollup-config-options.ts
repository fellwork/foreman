import { ExternalOption, OutputOptions } from '../index';
export interface RollupConfigOptions {
  cwd?: string;
  clean?: boolean;
  inputFiles?: string[];
  bundle?: boolean;
  onlyCJS?: boolean;
  onlyESM?: boolean;
  skipValidate?: boolean;
  external?: ExternalOption;
  globbyOptions?: {
    absolute?: boolean;
    baseNameMatch?: boolean;
    braceExpansion?: boolean;
    caseSensitiveMatch?: boolean;
    concurrency?: number;
    cwd?: string;
    deep?: boolean;
    dot?: boolean;
    extglob?: boolean;
    followSymbolicLinks?: boolean;
    globstar?: boolean;
    ignore?: string[];
    markDirectories?: boolean;
    objectMode?: boolean;
    onlyDirectories?: boolean;
    onlyFiles?: boolean;
    stats?: boolean;
    supressErrors?: boolean;
    throwErrorOnBrokenSymbolicLink?: boolean;
    unique?: boolean;
  };
  outputOptions?: Partial<OutputOptions>;
}
