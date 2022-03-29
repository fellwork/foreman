export interface ExternalsOptions {
  /* Path to package.json or paths */
  pkgPath: string | string[]
  /* Node built-in modules are external */
  builtIns?: boolean
  /* Dependencies are external */
  deps?: boolean
  /* Dev Dependencies are external */
  devDeps?: boolean
  /* Peer Dependencies are external */
  peerDeps?: boolean
  /* Optional dependencies are external */
  optDeps?: boolean
  /* Force deps to be external, default is `[]` */
  include?: string | RegExp | (string | RegExp)[]
  /* Force exclude from externals, default is `[]` */
  exclude?: string | RegExp | (string | RegExp)[]
}
