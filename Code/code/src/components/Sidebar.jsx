import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div >

       <div className='flex sm:flex-col flex-row sm:gap-1 gap-6 items-center justify-center '>
            <div>
                <Link to='/'>
                <button className='text-white bg-amber-400 hover:bg-amber-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-400 dark:hover:bg-amber-500 '>Table1</button>
                </Link>
            </div>

            <div>
                <Link to='/table2'>
                <button className='text-white bg-amber-400 hover:bg-amber-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-400 dark:hover:bg-amber-500 '>Table2</button>
                </Link>
            </div>
       </div>
    </div>
  )
}

export default Sidebar