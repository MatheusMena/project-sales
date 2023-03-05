import { Seo } from '@/components/Seo'
import { HomePage } from './homePage'
import LoginPage from './LoginPage'

export default function Home() {
  return (
    <>
      <Seo title='Project-Sale' />
      <HomePage />
    </>
  )
}
