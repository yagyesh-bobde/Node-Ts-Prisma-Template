"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaClient = void 0;
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("config"));
const logger_1 = __importDefault(require("./utils/logger"));
const routes_1 = __importDefault(require("./routes"));
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
const port = config_1.default.get("port");
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(routes_1.default);
exports.prismaClient = new client_1.PrismaClient({
    log: ['query', 'info', 'warn'],
});
app.listen(port, () => {
    logger_1.default.info(`Server started on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map