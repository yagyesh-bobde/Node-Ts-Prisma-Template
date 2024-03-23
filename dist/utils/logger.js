"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pino_1 = __importDefault(require("pino"));
const dayjs_1 = __importDefault(require("dayjs"));
const default_1 = __importDefault(require("../config/default"));
const level = default_1.default.logLevel;
const log = (0, pino_1.default)({
    transport: {
        target: "pino-pretty"
    }, level,
    base: {
        pid: false,
    },
    timestamp: () => `,"time":"${(0, dayjs_1.default)().format()}"`,
});
exports.default = log;
