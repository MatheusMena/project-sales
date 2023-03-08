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
      <article id='scrollfull' className='flex flex-col gap-2'>
        <section
          id='slider1'
          // flex flex-wrap justify-center
          className='w-full h-auto m-auto overflow-hidden'
        >
          <div
            id='slide-track'
            // animation 40s linear infinite
            className='flex animate-scrollXR100'
          >
            {Tags.map(tags => (
              <div id='slide' className='w-[calc(100px * 20)]'>
                <div className='w-[100px] bg-kimono text-snow text-center m-1 rounded-sm hover:p-1'>
                  # {tags}
                </div>
              </div>
            ))}
            {Tags.map(tags => (
              <div id='slide' className='w-[calc(100px * 20)]'>
                <div className='w-[100px] bg-kimono text-snow text-center m-1 rounded-sm '>
                  # {tags}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id='slider1'
          // flex flex-wrap justify-center
          className=' w-full h-auto m-auto overflow-hidden'
        >
          <div
            id='slide-track'
            // animation 40s linear infinite
            className='flex animate-scrollXL120'
          >
            {Tags.map(tags => (
              <div id='slide' className='w-[calc(100px * 20)]'>
                <div className='w-[100px] bg-kimono text-snow text-center m-1 rounded-sm '>
                  # {tags}
                </div>
              </div>
            ))}
            {Tags.map(tags => (
              <div id='slide' className='w-[calc(100px * 20)]'>
                <div className='w-[100px] bg-kimono text-snow text-center m-1 rounded-sm '>
                  # {tags}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id='slider1'
          // flex flex-wrap justify-center
          className=' w-full h-auto m-auto overflow-hidden'
        >
          <div
            id='slide-track'
            // animation 40s linear infinite
            className='flex animate-scrollXR50 '
          >
            {Tags.map(tags => (
              <div id='slide' className='w-[calc(100px * 20)]'>
                <div className='w-[100px] bg-kimono text-snow text-center m-1 rounded-sm '>
                  # {tags}
                </div>
              </div>
            ))}
            {Tags.map(tags => (
              <div id='slide' className='w-[calc(100px * 20)]'>
                <div className='w-[100px] bg-kimono text-snow text-center m-1 rounded-sm '>
                  # {tags}
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>
    </>
  )
}
