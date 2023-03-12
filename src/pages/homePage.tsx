import { Banner } from '../components/HomePages/Banner'
import { FullScroll } from '../components/HomePages/FullScroll'
import { getCookie } from 'cookies-next'
import { tokenVerify } from '../../service/user'

export const HomePage = () => {
  return (
    <main className='bg-midnght-express h-screen'>
      <Banner />
      <div
        id='CenteringFullScroll'
        className='lg:my-[2vh] md:my-[1vh] my-[0vh]'
      >
        <FullScroll />
      </div>
    </main>
  )
}

export default HomePage

export const getServerSideProps = ({req, res}) => {
// função do next para acessar backend propio
try {
  const token = getCookie('authorization', {req, res})
  console.log(token)
  if(!token) throw new Error('Token inválido')
  tokenVerify(token)
  return {
    props: {}
  }
} catch (error) {
  return {
    redirect: {
      permanent: false,
      destination:'/'
    },
    props: {}
  }
}
}