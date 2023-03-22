import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {

  await prisma.user.deleteMany()
  await prisma.post.deleteMany()
  await prisma.grup.deleteMany()

  await prisma.user.create({
    data: {
      name: 'isaac',
      github_url: 'https://github.com/IsaacGSS',
      email: 'isaacgabriessz@gmail.com',
      nikeName: 'Isaac S. Silva',
      post: {
        create: {
          title: 'Pokedex',
          description:
            'A iPokeDex e a sua pokedex para relenbrar ade algum pokemon no estilo scroll Infinito'
        }
      }
    }
  })

  await prisma.user.create({
    data: {
      name: 'matheus',
      github_url: 'https://github.com/MatheusMena',
      email: 'MatheusMena@gmail.com',
      nikeName: 'Matheus Mena',
      post: {
        create: {
          title: 'project sale',
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
