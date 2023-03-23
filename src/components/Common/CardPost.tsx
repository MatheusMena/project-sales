import Image from 'next/image'
import { useState } from 'react'
import { IProjectPost } from '../../Types/IProjectPost'

export const CardPost = ({
  url_project,
  name_project,
  tags,
  description,
  grup
}: IProjectPost) => {
  const [isActiveInfo, setIsActiveInfo] = useState(false)

  const acttiveProject = () => {
    setIsActiveInfo(!isActiveInfo)
  }

  return (
    <div
      onClick={acttiveProject}
      className='w-auto md:w-60  h-80 md:m-10 m-5 flex rounded-lg flex-col overflow-hidden text-snow'
    >
      <div>
        <Image
          className='w-full h-80 bg-cover object-cover'
          src={url_project}
          alt='foto de projeto'
          width={500}
          height={500}
          unoptimized
        />
      </div>
      <div
        aria-checked={isActiveInfo}
        className='
        max-w-md:aria-checked:-top-full 
        aria-checked:duration-700
       h-full flex flex-col md:justify-end justify-center items-center gap-3  m-auto relative -top-[38%] md:hover:-top-full transition-all duration-500 md:hover:duration-700 px-5 bg-gradient-to-t from-gray-900 via-gray-700  '
      >
        <div className='w-60 flex flex-col gap-2'>
          <h3 className='text-xl font-medium text-orbe bg-white py-1 pl-2 rounded-bl-xl rounded-tl-sm'>
            {name_project}
          </h3>
          <ul className='flex overflow-hidden gap-2.5'>
            {tags.map(tag => (
              <li>{tag}</li>
            ))}
          </ul>
          <span className='flex gap-5'>
            <button className=' font-medium p-1 border-2 border-spririt rounded-md hover:bg-spririt active:bg-kimono active:text-spririt active:border-transparent transition-all duration-75'>
              Salvar
            </button>
            <button className=' font-medium p-1 border-2 border-spririt rounded-md hover:bg-spririt active:bg-kimono active:text-spririt active:border-transparent transition-all duration-75'>
              Adquirir
            </button>
          </span>
        </div>
        <div className='md:w-52 h-1/2 flex flex-col gap-4 my-2 md:mr-10 mx-1 overflow-scroll'>
          <p>{description}</p>
        </div>
        <div className='h-14 mr-8 mb-2 flex flex-row gap-3 overflow-x-scroll'>
          {grup.map(grup => (
            <Image
              src={grup.url_img}
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
