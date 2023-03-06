import Image from 'next/image'
export const HeaderPerfil = () => {
  return (
    <section>
      <div>
        <Image
          src={
            'https://images.pexels.com/photos/430207/pexels-photo-430207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
          alt={'Foto de Fundo'}
          unoptimized
          width={1000}
          height={1000}
        />
      </div>
      <section>
        <div>
          <Image
            src={'https://github.com/MatheusMena.png'}
            alt={'foto de perfil de isaac'}
            unoptimized
            width={100}
            height={100}
          />
        </div>
        <div>
          <h2>Matheus Mena</h2>
          <h3>Full-Stack</h3>
          <p>
            Desenvolvedor Front-End && Estudante de Desenvolvimento Web
            Fullstack na @tryber
          </p>
        </div>
        <div>
          <div>Comtratar</div>
          <div>Seguir</div>
        </div>
      </section>
    </section>
  )
}
