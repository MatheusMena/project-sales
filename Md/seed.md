<div align="center" >
<img src='./img/icons8-prisma-orm.svg' width='100'> 

<br/>

# **🌱 Seed**  
</div>

 * referenciando o banco
  
```ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
```
* criando os usuarios e post

```ts
// Seed, utilizada para semear, popular o banco de dados

// funcao main para criacao
async function main() {

// deletando tudo o que tiver anteriormente para abrir espaso para semear novamente o db
  await prisma.user.deleteMany()
  await prisma.post.deleteMany()


// metodo de criar usuarios
  await prisma.user.create({
    data: {
      name: 'isaac',
      github_url: 'https://github.com/IsaacGSS',
      email: 'isaacgabriessz@gmail.com',
      nikeName: 'Isaac S. Silva',

      // criar o post ja conectado ao usuario
      post: {
        create: {
          title: 'Pokedex',
          description:
            'A iPokeDex e a sua pokedex para relenbrar ade algum pokemon no estilo scroll Infinito'
        }
      }
    }
  })

}

```

* retornando e chamando a ***Seed.ts***
  * chamando funcao 👇
  ```ts
  main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
  ```

  *  chamando Seed.ts 👇
    ```node
    yarn seed
        or
    npm run seed
    ```
    
    <a href='https://www.prisma.io/docs/guides/database/seed-database#how-to-seed-your-database-in-prisma'>
Prisma/seed
</a>
