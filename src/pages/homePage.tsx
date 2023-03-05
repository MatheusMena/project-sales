import { Banner } from '../components/HomePages/Banner'
import { FullScroll } from '../components/HomePages/FullScroll'
export const HomePage = () => {
  return (
    <>
      <Banner />
      <div className='md:my-[5vh] my-[2.5vh]'>
        <FullScroll />
      </div>
    </>
  )
}

export default HomePage
