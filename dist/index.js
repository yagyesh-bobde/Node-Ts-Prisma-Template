"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaClient = void 0;
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("./utils/logger"));
const routes_1 = __importDefault(require("./routes"));
const client_1 = require("@prisma/client");
const default_1 = __importDefault(require("./config/default"));
const app = (0, express_1.default)();
const port = default_1.default.port;
exports.prismaClient = new client_1.PrismaClient({
    log: ['query', 'info', 'warn'],
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(routes_1.default);
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.listen(port, () => {
    logger_1.default.info(`Server started on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map