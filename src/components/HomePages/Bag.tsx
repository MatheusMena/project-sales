import { ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export const Bag = () => {
  const [isActiveBag, setIsActiveBag] = useState(true)
  const onclickBag = () => setIsActiveBag(!isActiveBag)

  return (
    <div className='flex gap-2'>
      <ShoppingCartIcon
        onClick={onclickBag}
        className='w-6 fixed md:static flex gap-2 top-2 right-2'
      />
      <span className='hidden lg:block'>Bag</span>

      <div
        aria-checked={isActiveBag}
        className='
  aria-checked:right-0
  
  w-80 h-screen fixed flex flex-col bg-white text-black p-2 
  top-0 -right-80
  transition-all duration-500
  '
      >
        <div className='w-full'>
          <XMarkIcon onClick={onclickBag} className='w-8 text-black' />
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
  )
}
