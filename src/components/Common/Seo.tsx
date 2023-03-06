import Head from 'next/head'
import { ISeo } from '../../Types/iSeo'

export const Seo = ({ title, description }: ISeo) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description && description} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}
