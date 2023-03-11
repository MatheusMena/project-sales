import {
  CodeBracketSquareIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
import { useState } from 'react'
import { CardPost } from '../Common/cardPost'

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
  return (
    <main
      className='text-snow mt-5
    md:relative md:top-28 overflow-hidden'
    >
      <section
        className='
      flex justify-evenly'
      >
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
        w-full flex justify-center items-center'
        >
          <UserGroupIcon
            aria-checked={isActiveProjectGroup}
            onClick={acttiveProjectGroup}
            className='aria-checked:w-10 w-6 transition-all duration-500'
          />
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
        bg-red-900 w-full flex justify-end lg:px-[10%] md:px-5'
        >
          <CardPost />
        </article>
        <article
          aria-checked={isActiveProjectGroup}
          className='
          aria-checked:-left-[50%] 
          transition-all duration-1000
          relative left-0
          bg-blue-900 w-full flex justify-end lg:px-[10%] md:px-5'
        >
          <CardPost />
        </article>
      </section>
    </main>
  )
}
