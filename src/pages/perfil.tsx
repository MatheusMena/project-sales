import { HeaderPerfil } from '@/components/PerfilPages/HeadterPerfil'
import { GalleryPost } from '../components/PerfilPages/GalleryPost'
import { Seo } from '../components/Common/Seo'

export const PerfilsPage = () => {
  return (
    <>
      <Seo title='perfil' />
      <section className='h-screen'>
        <HeaderPerfil />
        <GalleryPost />
      </section>
    </>
  )
}

export default PerfilsPage
