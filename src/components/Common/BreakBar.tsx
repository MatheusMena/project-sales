import { IBreakBar } from '../../Types/IBreakBar'
export const BreakBar = ({ children }: IBreakBar) => {
  return (
    <span className='text-snow flex flex-col my-5'>
      <div className='w-full h-[2px] bg-snow'></div>
      <div className='bg-midnght-express px-2 m-auto -my-[14px]'>
        <p>{children}</p>
      </div>
    </span>
  )
}
