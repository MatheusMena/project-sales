import {
  CodeBracketSquareIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

export const GalleryPost = () => {
  return (
    <main
      className='h-screen text-snow mt-5 max-w-6xl m-auto x
    md:relative md:top-28 
    lg;flex lg:w-10'
    >
      <section
        className='
      flex justify-evenly
      
      
      lg:justify-start lg:flex-col'
      >
        <div
          className='
        
        w-full flex justify-center items-center
        
        lg:w-auto lg:block
        '
        >
          <CodeBracketSquareIcon className='w-8' />
        </div>
        <div
          className='
        w-full flex justify-center items-center
        
        lg:w-auto lg:block
        '
        >
          <UserGroupIcon className=' w-8' />
        </div>
      </section>
      <article>asdas</article>
      <article>ada</article>
    </main>
  )
}
