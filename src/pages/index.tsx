import { Seo } from '@/components/Common/Seo'
import { HomePage } from './homePage'
import { Header } from '@/components/Common/Header'
import { BreakBar } from '@/components/Common/BreakBar'
import Shopping from '../components/ShoppingPages/index'

export default function Home() {
  return (
    <>
      <Seo title='Project-Sale' />
      <Header />
      <HomePage />
      <BreakBar>Projetos - Sales</BreakBar>
      <Shopping />
    </>
  )
}
