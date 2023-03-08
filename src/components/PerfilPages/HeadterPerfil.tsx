import { TrophyIcon, HeartIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
export const HeaderPerfil = () => {
  return (
    <section className='text-snow text-sm flex flex-col'>
      <div
        id='bgImgPerfil'
        className='
        md:h-[25vh]

        sm:w-screen sm:h-[20vh] sm:m-auto sm:rotate-0

        w-screen h-[20vh] -z-10 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500'
      ></div>
      <section className='md:max-w-7xl md:m-auto'>
        <div>
          <Image
            className='
            md:rounded-xl md:mx-5 

            -mt-[50px]

            object-cover m-auto rounded-full'
            src={'https://github.com/MatheusMena.png'}
            alt={'foto de perfil de isaac'}
            unoptimized
            width={100}
            height={100}
          />
        </div>
        <div
          className='
          md:mt-0 md:border-0

          sm:text-left sm:-mt-[50px]

          m-auto py-5 flex flex-col text-center gap-5 border-b border-Steel'
        >
          <span
            className='
            sm:mx-5

            flex flex-col gap-1'
          >
            <h2 className='text-xl'>Matheus Mena</h2>
            <h3 className='text-base'>Full-Stack</h3>
          </span>

          <p className='md:border-b md:border-snow md:text-left md:5 md:pb-5 mb-2 px-5 text-center '>
            Desenvolvedor Front-End && Estudante de Desenvolvimento Web
            Fullstack na @tryber
          </p>
        </div>
        <div
          className='
          md:max-w-full md:-mt-[180px] md:justify-end

          sm:max-w-md sm:gap-5
        
          w-screen m-auto my-5 flex  text-center '
        >
          <div
            className='
            md:w-28

            sm:w-1/2

            w-full h-[30px] flex justify-center items-center gap-2 mx-2 bg-orbe text-snow bg-opacity-80 rounded-lg '
          >
            Seguir
            <HeartIcon className='w-5' />
          </div>
          <div
            className='
            md:w-52

            sm:w:1/3

            w-full  h-[30px] flex justify-center items-center gap-2 mx-2 bg-kimono text-snow bg-opacity-90 rounded-lg '
          >
            Comtratar
            <TrophyIcon className='w-5' />
          </div>
        </div>
      </section>
    </section>
  )
}
