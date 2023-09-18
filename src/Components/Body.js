import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Body = () => {
    return (
        <div className='flex'>
            <div className='m-2 p-2'>
                <Sidebar />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Body