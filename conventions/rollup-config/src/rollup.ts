import { RollupOptions } from 'rollup';
import { promisify } from 'util';
import { existsSync as fileExists, readFileSync as fileRead } from 'fs';
import { resolve, sep as DIRECTORY_SEPARATOR } from 'path';
import { exec as execCallback } from 'child_process';

import rollupTypescriptDefinitions from 'rollup-plugin-dts';
import configureRollupBuild from './rollup-build';

const exec = promisify(execCallback);

interface RollupBuilds {
  main?: RollupOptions;
  module?: RollupOptions;
  types?: RollupOptions;
}

interface callback {
  (builds: RollupBuilds): Promise<RollupBuilds>;
}

export async function autoconfig(fn?: callback): Promise<RollupOptions[]> {
  const pkgFile = resolve(process.cwd(), 'package.json');
  if (!fileExists(pkgFile))
    throw ReferenceError(
      'CWD has no package.json, are you executing this from the correct WORK-PATH?'
    );

  // read package.json
  const pkg = JSON.parse(fileRead(pkgFile).toString());
  if (!pkg.config) throw SyntaxError('$.config is not specified in your package.json!');

  // resolve source file for the bundle, required
  if (!pkg.config.sourceFile)
    throw SyntaxError(
      '$.config.sourceFile is not specified, please point to your bundle source file!'
    );
  const sourceFile = resolve(pkg.config.sourceFile).replace(
    `${process.cwd()}${DIRECTORY_SEPARATOR}`,
    ''
  );

  // collect multiple outputs
  let buildList: RollupBuilds = {};
  const externalDependencies = [
    ...Object.keys(pkg.dependencies),
    ...(pkg.config?.externalDependencies ?? [])
  ];
  const tsconfigFile = pkg.config?.tsconfig ?? 'tsconfig.json';
  const buildConfig = {
    tsconfigFile,
    externalDependencies,
    sourceFile
  };

  async function addBuild(build: 'main' | 'module' | 'types', outFile: string) {
    const config = {
      ...buildConfig,
      outFile
    };

    if (outFile.match(/\.mjs$/)) buildList[build] = configureRollupBuild('esm', config);
    if (outFile.match(/\.cjs$/)) buildList[build] = configureRollupBuild('cjs', config);
    if (outFile.match(/\.d.ts$/)) {
      await exec(`tsc --outDir ${resolve(process.cwd(), 'temp')} --emitDeclarationOnly`);
      const definitionFile = sourceFile.replace(/source|src/, 'temp').replace(/\.ts$/, '.d.ts');
      buildList[build] = configureRollupBuild('es', {
        ...config,
        sourceFile: definitionFile,
        pluginList: [rollupTypescriptDefinitions()]
      });
    }
  }

  // resolve main bundle file, required
  if (!pkg.main) throw SyntaxError('$.main is not specified, cannot build a bundle!');
  await addBuild('main', resolve(pkg.main));

  // additional builds
  if (pkg.module) await addBuild('module', resolve(pkg.module));
  if (pkg.types) await addBuild('types', resolve(pkg.types));

  if (fn) buildList = await fn(buildList);

  return Object.values(buildList);
}
