export function getDefault(value) {
    return (('default' in value ? value.default : value) || value);
}
