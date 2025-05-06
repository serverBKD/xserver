import { PrismaClient } from './generated/prisma'

const PrismaClientSingleton = () => {
  return new PrismaClient()
}

interface GlobalPrisma {
  prisma?: PrismaClient;
}

const globalForPrisma = globalThis as typeof globalThis & GlobalPrisma;

const prisma = globalForPrisma.prisma ?? PrismaClientSingleton()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// const prisma = new PrismaClient()
export default prisma