export const Banner = () => {
  return (
    <>
      <section id='Banner'>
        <video
          muted
          autoPlay
          loop
          src='/clipMoveforBanner.mp4'
          className='w-full h-[85vh] lg:h-[80vh] bg-cover object-cover brightness-50 saturate-50'
        />

        <div>
          <h2>Project - Sale</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et tempore
            ipsum doloremque voluptas sint nemo praesentium exercitationem.
            Eveniet recusandae, repellat esse eos quae impedit vel, est ea fuga
            reprehenderit tempore.
          </p>
        </div>
      </section>
    </>
  )
}
