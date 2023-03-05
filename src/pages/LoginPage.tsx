import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function LoginPage() {
  const router = useRouter()
  return (
    <>
      <div className='flex items-center justify-center min-h-screen lg:px-20 text-center bg-slate-300'>
        <div>
          <Image
            unoptimized
            width={1000}
            height={100}
            alt='Imagen de Login UI'
            src={
              'https://images.pexels.com/photos/5926395/pexels-photo-5926395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
            className='h-screen lg:h-[80vh] md:w-screen bg-cover object-cover rounded-l-lg relative z-0 sm:block hidden shadow-2xl'
          />
        </div>
        <div className='bg-slate-100 lg:static absolute z-10 rounded-r-lg shadow-2xl flex flex-col items-center justify-center w-screen h-screen sm:w-1/2 sm:h-[50%] sm:py-10 lg:h-[80vh] lg:px-20 '>
          <h1 className='py-10 text-5xl font-sans'>Login</h1>
          <div className='bg-slate-300 rounded-md  p-3 my-1 flex items-center'>
            <EnvelopeIcon className='w-6 text-cyan-900 mr-1 pr-1 border-r border-slate-100' />
            <input
              className=' bg-slate-300 rounded-md w-56 outline-none placeholder:italic'
              type='email'
              placeholder='Email'
            />
          </div>
          <div className='bg-slate-300 rounded-md p-3 my-1 flex items-center'>
            <LockClosedIcon className='w-6 text-cyan-900 mr-1 pr-1 border-r border-slate-100' />
            <input
              className='bg-slate-300 rounded-md w-56 outline-none placeholder:italic'
              type='password'
              placeholder='Senha'
            />
          </div>
          <div className='flex justify-center my-10'>
            <button className='bg-green-500 m-1 p-2 rounded-lg hover:bg-green-600'>
              Criar Conta
            </button>
            <button
              className='bg-indigo-500 m-1 p-2 rounded-lg hover:bg-indigo-600'
              onClick={() => router.push('/homePage')}
            >
              Entrar
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
