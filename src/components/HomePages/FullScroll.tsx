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
      <section
        id='slider1'
        // flex flex-wrap justify-center
        className=' w-[75vw] h-auto m-auto overflow-hidden'
      >
        <div
          id='slide-track'
          // animation 40s linear infinite
          className='flex animate-scrollXR'
        >
          {Tags.map(tags => (
            <div id='slide' className='w-[calc(100px * 20)]'>
              <div className='w-[100px] bg-slate-700 text-white text-center m-1 rounded-sm '>
                # {tags}
              </div>
            </div>
          ))}
          {Tags.map(tags => (
            <div id='slide' className='w-[calc(100px * 20)]'>
              <div className='w-[100px] bg-slate-700 text-white text-center m-1 rounded-sm '>
                # {tags}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id='slider1'
        // flex flex-wrap justify-center
        className=' w-[75vw] h-auto m-auto overflow-hidden'
      >
        <div
          id='slide-track'
          // animation 40s linear infinite
          className='flex animate-scrollXL'
        >
          {Tags.map(tags => (
            <div id='slide' className='w-[calc(100px * 20)]'>
              <div className='w-[100px] bg-slate-700 text-white text-center m-1 rounded-sm '>
                # {tags}
              </div>
            </div>
          ))}
          {Tags.map(tags => (
            <div id='slide' className='w-[calc(100px * 20)]'>
              <div className='w-[100px] bg-slate-700 text-white text-center m-1 rounded-sm '>
                # {tags}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id='slider1'
        // flex flex-wrap justify-center
        className=' w-[75vw] h-auto m-auto overflow-hidden'
      >
        <div
          id='slide-track'
          // animation 40s linear infinite
          className='flex animate-scrollXR'
        >
          {Tags.map(tags => (
            <div id='slide' className='w-[calc(100px * 20)]'>
              <div className='w-[100px] bg-slate-700 text-white text-center m-1 rounded-sm '>
                # {tags}
              </div>
            </div>
          ))}
          {Tags.map(tags => (
            <div id='slide' className='w-[calc(100px * 20)]'>
              <div className='w-[100px] bg-slate-700 text-white text-center m-1 rounded-sm '>
                # {tags}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
