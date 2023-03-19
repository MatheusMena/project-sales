import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  await prisma.user.create({
    data: {
      email: 'text@text.com',
      name: 'text',
      nikeName: 'text123',
      post: {
        create: {
          title: 'ToDoList',
          grup: 
        }
      }
    }
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
