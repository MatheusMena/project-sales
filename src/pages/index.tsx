import { Seo } from '@/components/Common/Seo'
import { HomePage } from './homePage'
import { Header } from '@/components/Common/Header'

export default function Home() {
  return (
    <>
      <Seo title='Project-Sale' />
      <Header />
      <HomePage />
    </>
  )
}
