import Image from 'next/image'
import { useState } from 'react'
export const CardPost = () => {
  const Grup = [
    'https://github.com/levxyca.png',
    'https://github.com/filipedeschamps.png',
    'https://github.com/iuricode.png',
    'https://github.com/diego3g.png',
    'https://github.com/Gui-HR.png',
    'https://github.com/lucasmontano.png',
    'https://github.com/omariosouto.png',
    'https://github.com/rafaballerini.png',
    'https://github.com/gustavoguanabara.png'
  ]

  const [isActiveInfo, setIsActiveInfo] = useState(true)

  const acttiveProject = () => {
    setIsActiveInfo(!isActiveInfo)
  }

  return (
    <div
      onClick={acttiveProject}
      className='w-auto md:w-60  h-80 md:m-10 m-5 flex rounded-lg flex-col overflow-hidden'
    >
      <div>
        <Image
          className='w-full h-80 bg-cover object-cover'
          src={
            'https://s3-alpha-sig.figma.com/img/5f84/6572/0ed8b2500dcdbf4b479cc1745b1cd57b?Expires=1679270400&Signature=MBRpLBTc2rYFM2S8TRY6mwnusrmg76d-JiyYRPil3ioUwN5QY4Ef9nWTHMloVQ1ZsTPt5qFkEsGXy81lC1GuOEJx7Q-291JHsMXnCkvINDhPVJOQSEb4RUPcHNSj3QXmriDhqbTD56mnQRNeckBQz6a~rfCjsbmLCbsZXAQ3icg2XTXF~Rb9-wO~XIrMIVwezoB9CK1cuW0dukstLLxMgsD45Ml1dzb697lJ55Uan-pIEj~fP4mmCUp9MnQZqRdJm2IL-nJOOfqeiaH3OUxkFru8YWc3Wn8OewV0N41Lp-k6hHDnCVyJp7WIsD2sCkiC6dJ-CWDm6fyjLHgxinrRBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
          }
          alt='foto de projeto'
          width={500}
          height={500}
          unoptimized
        />
      </div>
      <div
        aria-checked={isActiveInfo}
        className='
        aria-checked:-top-full 
        aria-checked:duration-700

       h-full flex flex-col md:justify-end justify-center items-center gap-3  m-auto relative -top-[38%] md:hover:-top-full transition-all duration-500 md:hover:duration-700 px-5 bg-gradient-to-t from-gray-900 via-gray-700  '
      >
        <div className='w-60 flex flex-col gap-2'>
          <h3 className='text-xl font-medium text-orbe bg-white py-1 pl-2 rounded-bl-xl rounded-tl-sm'>
            página de clima
          </h3>
          <ul className='flex overflow-hidden gap-2.5'>
            <li>#FrontEnd</li>
            <li>#API</li>
            <li>#UI/UX</li>
          </ul>
          <span className='flex gap-5'>
            <button className=' font-medium p-1 border-2 border-spririt rounded-md hover:bg-spririt active:bg-kimono active:text-spririt active:border-transparent transition-all duration-75'>
              Espiar
            </button>
            <button className=' font-medium p-1 border-2 border-spririt rounded-md hover:bg-spririt active:bg-kimono active:text-spririt active:border-transparent transition-all duration-75'>
              Adquirir
            </button>
          </span>
        </div>
        <div className='md:w-52 h-1/2 flex flex-col gap-4 my-2 md:mr-10 mx-1 overflow-scroll'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            sapiente necessitatibus iste, animi labore omnis assumenda tempora
            soluta debitis maiores, ex asperiores accusamus suscipit vitae
            voluptatum ab consequuntur odit autem.
          </p>
        </div>
        <div className='h-14 mr-8 mb-2 flex flex-row gap-3 overflow-x-scroll'>
          {Grup.map(Grup => (
            <Image
              src={Grup}
              alt='foto de perfil'
              width={40}
              height={40}
              unoptimized
              className='rounded-full mb-2'
            />
          ))}
        </div>
      </div>
    </div>
  )
}
