/* eslint-disable react/prop-types */
import { FiMoon } from 'react-icons/fi'
// eslint-disable-next-line no-unused-vars
import { BsSun } from 'react-icons/bs'

export function Header({ setDarkTheme, darkTheme}) {
  return (
    <header className=''>
      <div className='flex justify-between items-center'>
        <p className='mx-2 text-center text-xl letter-spacing inline-block'>
          Nixx
        </p>
        <button onClick={() => setDarkTheme(!darkTheme)} className='text-1xl relative right-1 top-0.5 shadow-lg border rounded-full  hover:shadow-lg bg-white p-1'>
          {darkTheme ? <BsSun className='text-black' /> : <FiMoon className=''/>} 
        </button>
      </div>
      <h1 className='text-4xl text-center font-mono duration-300'>Todo</h1>
    </header>
  )
}
