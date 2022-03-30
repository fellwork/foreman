"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pathResolve = exports.pathJoin = exports.pathNormalize = void 0;
const pathe_1 = require("pathe");
Object.defineProperty(exports, "pathJoin", { enumerable: true, get: function () { return pathe_1.join; } });
Object.defineProperty(exports, "pathNormalize", { enumerable: true, get: function () { return pathe_1.normalize; } });
Object.defineProperty(exports, "pathResolve", { enumerable: true, get: function () { return pathe_1.resolve; } });
