import {
  CodeBracketSquareIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
import { useState } from 'react'
import { CardPost } from '../Common/CardPost'
import React from 'react'

export const GalleryPost = () => {
  const [isActiveProject, setIsActiveProject] = useState(true)
  const [isActiveProjectGroup, setIsActiveProjectGroup] = useState(false)

  const acttiveProject = () => {
    setIsActiveProjectGroup(false)
    setIsActiveProject(true)
  }

  const acttiveProjectGroup = () => {
    setIsActiveProject(false)
    setIsActiveProjectGroup(true)
  }

  const Grup = [
    { url_img: 'https://github.com/levxyca.png' },
    { url_img: 'https://github.com/filipedeschamps.png' },
    { url_img: 'https://github.com/iuricode.png' },
    { url_img: 'https://github.com/diego3g.png' },
    { url_img: 'https://github.com/Gui-HR.png' },
    { url_img: 'https://github.com/lucasmontano.png' },
    { url_img: 'https://github.com/omariosouto.png' },
    { url_img: 'https://github.com/rafaballerini.png' },
    { url_img: 'https://github.com/gustavoguanabara.png' }
  ]

  const Tags = ['#FrontEnd', '#API', '#UI/UX']

  return (
    <main
      className='text-snow mt-5
    md:relative md:top-28 overflow-hidden'
    >
      <section
        className='
      flex justify-evenly'
      >
        <div className='max-w-6xl w-full flex flex-row justify-evenly'>
          <div
            className='
        
        w-full h-20 flex justify-center items-center'
          >
            <CodeBracketSquareIcon
              aria-checked={isActiveProject}
              onClick={acttiveProject}
              className='aria-checked:w-10 w-6 transition-all duration-500'
            />
          </div>
          <div
            className='
        w-full h-20 flex justify-center items-center'
          >
            <UserGroupIcon
              aria-checked={isActiveProjectGroup}
              onClick={acttiveProjectGroup}
              className='aria-checked:w-10 w-6 transition-all duration-500'
            />
          </div>
        </div>
      </section>
      <section
        className='
        flex flex-row w-[200vw]  '
      >
        <article
          aria-checked={isActiveProject}
          className='
        aria-checked:left-0
        transition-all duration-1000
        relative -left-[50%]
        bg-transparent w-full flex justify-end lg:px-[10%] md:px-5'
        >
          <CardPost
            name_project='página de clima'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            sapiente necessitatibus iste, animi labore omnis assumenda tempora
            soluta debitis maiores, ex asperiores accusamus suscipit vitae
            voluptatum ab consequuntur odit autem.'
            url_project='https://th.bing.com/th/id/OIP.bskiDRZ7vFulYoQSkOTE9gHaE8?pid=ImgDet&rs=1'
            tags={Tags}
            grup={Grup}
          />
        </article>
        <article
          aria-checked={isActiveProjectGroup}
          className='
          aria-checked:-left-[50%] 
          transition-all duration-1000
          relative left-0
          bg-transparent w-full flex justify-end lg:px-[10%] md:px-5'
        >
          <CardPost
            name_project='página de clima'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            sapiente necessitatibus iste, animi labore omnis assumenda tempora
            soluta debitis maiores, ex asperiores accusamus suscipit vitae
            voluptatum ab consequuntur odit autem.'
            url_project='https://s3-alpha-sig.figma.com/img/5f84/6572/0ed8b2500dcdbf4b479cc1745b1cd57b?Expires=1679270400&Signature=MBRpLBTc2rYFM2S8TRY6mwnusrmg76d-JiyYRPil3ioUwN5QY4Ef9nWTHMloVQ1ZsTPt5qFkEsGXy81lC1GuOEJx7Q-291JHsMXnCkvINDhPVJOQSEb4RUPcHNSj3QXmriDhqbTD56mnQRNeckBQz6a~rfCjsbmLCbsZXAQ3icg2XTXF~Rb9-wO~XIrMIVwezoB9CK1cuW0dukstLLxMgsD45Ml1dzb697lJ55Uan-pIEj~fP4mmCUp9MnQZqRdJm2IL-nJOOfqeiaH3OUxkFru8YWc3Wn8OewV0N41Lp-k6hHDnCVyJp7WIsD2sCkiC6dJ-CWDm6fyjLHgxinrRBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
            tags={Tags}
            grup={Grup}
          />
        </article>
      </section>
    </main>
  )
}
