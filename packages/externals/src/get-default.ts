export function getDefault<T>(value: T | { default?: T }): T {
  return (('default' in value ? value.default : value) || value) as T
}
