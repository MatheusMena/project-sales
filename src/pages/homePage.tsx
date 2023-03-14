import { BreakBar } from '@/components/Common/BreakBar'
import { Banner } from '../components/HomePages/Banner'
import { FullScroll } from '../components/HomePages/FullScroll'
export const HomePage = () => {
  return (
    <>
      <main className='bg-midnght-express h-screen'>
        <Banner />
        <div
          id='CenteringFullScroll'
          className='lg:my-[2vh] md:my-[1vh] my-[0vh]'
        >
          <FullScroll />
        </div>
      </main>
      <BreakBar>Projetos - Sales</BreakBar>
    </>
  )
}

export default HomePage
