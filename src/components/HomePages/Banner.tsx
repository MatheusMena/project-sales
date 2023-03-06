export const Banner = () => {
  return (
    <>
      <section id='Banner' className='text-center'>
        <video
          muted
          autoPlay
          loop
          src='/clipMoveforBanner.mp4'
          className='w-full h-[85vh] lg:h-[80vh] z-0 bg-cover object-cover brightness-50 saturate-50'
        />
        <h3 className='absolute z-20 inset-x-0 inset-y-1/3 text-7xl text-white '>
          Project - Sale
        </h3>
      </section>
    </>
  )
}
