import Image from 'next/image'
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

  return (
    <div className='w-auto md:w-60  flex flex-col overflow-hidden'>
      <div>
        <Image
          className='w-full h-96 bg-cover object-cover'
          src={
            'https://s3-alpha-sig.figma.com/img/5f84/6572/0ed8b2500dcdbf4b479cc1745b1cd57b?Expires=1679270400&Signature=MBRpLBTc2rYFM2S8TRY6mwnusrmg76d-JiyYRPil3ioUwN5QY4Ef9nWTHMloVQ1ZsTPt5qFkEsGXy81lC1GuOEJx7Q-291JHsMXnCkvINDhPVJOQSEb4RUPcHNSj3QXmriDhqbTD56mnQRNeckBQz6a~rfCjsbmLCbsZXAQ3icg2XTXF~Rb9-wO~XIrMIVwezoB9CK1cuW0dukstLLxMgsD45Ml1dzb697lJ55Uan-pIEj~fP4mmCUp9MnQZqRdJm2IL-nJOOfqeiaH3OUxkFru8YWc3Wn8OewV0N41Lp-k6hHDnCVyJp7WIsD2sCkiC6dJ-CWDm6fyjLHgxinrRBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
          }
          alt='foto de projeto'
          width={500}
          height={500}
          unoptimized
        />
      </div>
      <div className='relative -top-96'>
        <div className='w-60 flex flex-col gap-2  bg-gradient-to-t from-gray-900 via-gray-700  '>
          <h3>página de clima</h3>
          <ul className='flex overflow-hidden gap-2.5'>
            <li>#FrontEnd</li>
            <li>#API</li>
            <li>#UI/UX</li>
          </ul>
          <span className='flex gap-5'>
            <button>Salvar</button>
            <button>Adquirir</button>
          </span>
        </div>
        <div className='flex flex-col gap-4 my-2 mx-1'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            sapiente necessitatibus iste, animi labore omnis assumenda tempora
            soluta debitis maiores, ex asperiores accusamus suscipit vitae
            voluptatum ab consequuntur odit autem.
          </p>
          <div>
            <div className='flex flex-row overflow-hidden'>
              {Grup.map(Grup => (
                <Image
                  src={Grup}
                  alt='foto de perfil'
                  width={40}
                  height={40}
                  unoptimized
                  className='rounded-full'
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
