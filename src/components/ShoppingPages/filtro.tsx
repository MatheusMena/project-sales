import { TableCellsIcon, FunnelIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export const Filtro = () => {
  const [filtrerActive, setFiltrerActive] = useState(false)

  const filtrerClick = () => {
    setFiltrerActive(!filtrerActive)
  }
  return (
    <div className='w-full h-10 flex flex-row gap-3 justify-end items-center px-10 my-2.5'>
      <div
        aria-checked={filtrerActive}
        className='aria-checked:overflow-x-scroll max-w-md overflow-hidden transition-all relative duration-1000'
      >
        <ul
          aria-checked={filtrerActive}
          className='aria-checked:right-0 flex gap-2.5 text-snow relative -right-full transition-all duration-1000 '
        >
          <li>
            <div>Promocao</div>
          </li>
          <li>
            <div>web</div>
          </li>
          <li>
            <div>UI/UX</div>
          </li>
        </ul>
      </div>

      <FunnelIcon
        onClick={filtrerClick}
        aria-checked={filtrerActive}
        className='aria-checked:fill-zinc-400 aria-checked:hover:fill-zinc-500 w-5 h-5 fill-zinc-600 hover:fill-zinc-400 transition-all'
      />
      <TableCellsIcon className='w-5 h-5 fill-zinc-600 hover:fill-zinc-400 transition-all' />
    </div>
  )
}
