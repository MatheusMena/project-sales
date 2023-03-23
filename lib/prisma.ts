import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
prisma.$queryRaw`SET @@boost_cached_queries = true`

if (process.env.NODE_ENV === 'development') global.prisma = prisma

export default prisma
