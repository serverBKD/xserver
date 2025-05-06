"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("./generated/prisma");
const PrismaClientSingleton = () => {
    return new prisma_1.PrismaClient();
};
const globalForPrisma = globalThis;
const prisma = (_a = globalForPrisma.prisma) !== null && _a !== void 0 ? _a : PrismaClientSingleton();
if (process.env.NODE_ENV !== 'production')
    globalForPrisma.prisma = prisma;
// const prisma = new PrismaClient()
exports.default = prisma;
