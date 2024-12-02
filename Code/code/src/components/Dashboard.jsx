import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div className='flex sm:flex-row gap-6 m-3 flex-col-reverse'>
        <div >
            <Sidebar/>
        </div>

        <div className='basis-11/12'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Dashboard