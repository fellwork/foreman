import { ModuleFormat, Plugin, RollupOptions } from 'rollup';
import configureEsbuild from './config-esbuild';
import commonjs from '@rollup/plugin-commonjs';

export interface RollupBuildOptions {
  sourceFile: string;
  outFile: string;
  externalDependencies?: string[];
  pluginList?: Plugin[];
  tsconfigFile?: string;
}

const RollupBuildTarget = (format: ModuleFormat) => {
  switch (format) {
    case 'es':
    case 'esm':
      return 'esnext';
    default:
      return 'es2017';
  }
};

const configureRollupBuild = (
  outFormat: ModuleFormat,
  config: RollupBuildOptions
): RollupOptions => {
  const buildTarget = RollupBuildTarget(outFormat);

  return {
    input: config.sourceFile,
    external: config.externalDependencies ?? [],
    plugins: config.pluginList ?? [
      commonjs(),
      configureEsbuild({
        tsconfig: config.tsconfigFile,
        target: buildTarget
      })
    ],
    output: {
      format: outFormat,
      file: config.outFile,
      sourcemap: true
    }
  };
};

export default configureRollupBuild;
