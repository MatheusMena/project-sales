import {
  UserIcon,
  ShoppingCartIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon
} from '@heroicons/react/24/solid'
import Link from 'next/link'
import React, { useState } from 'react'

export const Header = () => {
  const [isActive, setIsActive] = useState(true)
  const onclick = () => setIsActive(!isActive)

  return (
    <header
      aria-checked={isActive}
      className='
      max-md:aria-checked:-left-64 max-md:aria-checked:bg-transparent 

      fixed h-screen left-0 transition-all overflow-hidden p-2 flex flex-col bg-zinc-900 md:bg-zinc-700 md:bg-opacity-50 text-zinc-100 opacity-90 z-50

      md:h-auto md:w-full md:px-3 md:flex-row md:items-center md:justify-between md:text-center '
    >
      <div className='flex  justify-end' id='logo'>
        <span
          className='absolute z-10 cursor-pointer md:hidden'
          onClick={onclick}
        >
          {isActive ? (
            <Bars3Icon className='w-6 text-black bg-zinc-100 rounded-sm' />
          ) : (
            <XMarkIcon className='w-8' />
          )}
        </span>
        <span className='hidden md:block'>Logo</span>
      </div>
      <div
        className='flex gap-10 flex-col-reverse md:gap-5 md:items-center md:flex-row'
        id='nav'
      >
        <ul className='flex gap-5 md:flex-row flex-col'>
          <Link href={'/'}>
            <li>Home</li>
          </Link>
          <Link href={'/'}>
            <li>Projects</li>
          </Link>
          <Link href={'/'}>
            <li>Professionals</li>
          </Link>
        </ul>
        <div className=' flex gap-2 md:border-b md:border-black'>
          <button onClick={() => console.log('search Value')}>
            <MagnifyingGlassIcon className='w-5' />
          </button>
          <input
            className='w-2/3 md:w-40 lg:w-full px-2 py-1 rounded-md outline-none md:bg-transparent'
            id='search'
            type='text'
            name='search'
            placeholder='search..'
            onChange={searchValue => {
              searchValue.target.value
            }}
          />
        </div>
      </div>

      <div className='flex gap-2 h-screen md:h-full items-end' id='access'>
        <Link href={'/'}>
          <div className='flex gap-2'>
            <UserIcon className='w-6' />
            <span className='md:hidden lg:block'>Account</span>
          </div>
        </Link>
        <Link
          aria-checked={isActive}
          className='max-md:aria-checked:block hidden md:block'
          href={'/'}
        >
          <div className='flex gap-2'>
            <ShoppingCartIcon className='w-6 fixed md:static flex gap-2 top-2 right-2' />
            <span className='hidden lg:block'>Bag</span>

            <div className='w-80 h-screen fixed flex flex-col bg-white text-black p-2 top-0 right-0'>
              <div className='w-full'>
                <XMarkIcon className='w-8 text-black' />
              </div>

              <ul className=' h-full p-2 pt-5 overflow-y-scroll text-left'>
                <li>pedido</li>
              </ul>

              <div className='flex flex-col gap-1 p-1 my-1'>
                <hr />
                <div className='flex justify-around'>
                  <span>Valor:</span>
                  <span>22.00</span>
                </div>
                <div className='flex justify-around'>
                  <span>Quantidade:</span>
                  <span>1</span>
                </div>
                <hr />
                <button>Comprar</button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </header>
  )
}
