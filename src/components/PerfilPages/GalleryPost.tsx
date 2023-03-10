import {
  CodeBracketSquareIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

export const GalleryPost = () => {
  return (
    <main className='h-screen text-snow mt-5 md:relative md:top-28'>
      <section className='flex justify-evenly'>
        <div className='w-full flex justify-center items-center'>
          <CodeBracketSquareIcon className='md:w-10 w-8' />
        </div>
        <div className='w-full flex justify-center items-center'>
          <UserGroupIcon className='md:w-10 w-8' />
        </div>
      </section>
      <article></article>
      <article></article>
    </main>
  )
}
