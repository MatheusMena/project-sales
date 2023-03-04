export const FullScroll = () => {
  const Tags = [
    'HTML',
    'CSS',
    'Javascript',
    'Typescript',
    'Scss',
    'Tailwind',
    'React',
    'Next',
    'UI/UX',
    'Vite',
    'webdev',
    'animation',
    'button',
    'layout',
    'Redux',
    'API',
    'Creative',
    'loading',
    'From',
    'Angular'
  ]

  return (
    <>
      <main className='flex flex-wrap justify-center'>
        {Tags.map(tags => (
          <div className='mx-5'>
            <p># {tags}</p>
          </div>
        ))}
      </main>
    </>
  )
}
