import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Body = () => {
    return (
        <div className={`flex`}>
            <div className={`m-2 w-auto`}>
                <Sidebar />
            </div>
            <div className={`my-2 flex-grow`} >
                <Outlet />
            </div>
        </div>
    )
}

export default Body