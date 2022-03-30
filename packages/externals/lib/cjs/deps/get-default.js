"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefault = void 0;
function getDefault(value) {
    return (('default' in value ? value.default : value) || value);
}
exports.getDefault = getDefault;
