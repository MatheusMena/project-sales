import {
  UserIcon,
  ShoppingCartIcon,
  Bars3Icon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/solid'
import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header>
      <div id='logo'>
        <span>
          <Bars3Icon />
        </span>
        <span>Logo</span>
      </div>
      <div id='nav'>
        <ul>
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
      </div>
      <div id='access'>
        <div>
          <button onClick={() => console.log('search Value')}>
            <MagnifyingGlassIcon />
          </button>
          <input
            type='text'
            name='search'
            id='search'
            placeholder='search..'
            onChange={searchValue => {
              searchValue.target.value
            }}
          />
        </div>
        <Link href={'/'}>
          <div>
            <UserIcon />
            <span>Account</span>
          </div>
        </Link>
        <Link href={'/'}>
          <div>
            <ShoppingCartIcon />
            <span>Bag</span>
          </div>
        </Link>
      </div>
    </header>
  )
}
