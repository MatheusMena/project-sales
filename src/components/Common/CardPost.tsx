import { IProjectPost } from '@/Types/IProjectPost'
import Image from 'next/image'
export const CardPost = ({
  url_project,
  name_project,
  tags,
  description,
  grup
}: IProjectPost) => {
  return (
    <div className='w-auto md:w-60  flex flex-col overflow-hidden relative'>
      <div>
        <Image
          className='w-full h-96 bg-cover object-cover'
          src={url_project}
          alt='foto de projeto'
          width={500}
          height={500}
          unoptimized
        />
      </div>
      <div className='absolute top-0'>
        <div className='w-60 flex flex-col gap-2  bg-gradient-to-t from-gray-900 via-gray-700  '>
          <h3>{name_project}</h3>
          <ul className='flex overflow-hidden gap-2.5'>
            {tags.map(tag => (
              <li>{tag}</li>
            ))}
          </ul>
          <span className='flex gap-5'>
            <button>Salvar</button>
            <button>Adquirir</button>
          </span>
        </div>
        <div className='flex flex-col gap-4 my-2 mx-1'>
          <p>{description}</p>
          <div>
            <div className='flex flex-row overflow-hidden'>
              {grup.map(grup => (
                <Image
                  src={grup.url_img}
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
