import React from 'react'
import Youtube from "../Asset/preview.png"
import Profile from "../Asset/profile-user.png"
import Search from "../Asset/search.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { mainSideBarToggle } from '../Utils/appSlice'
import { useNavigate } from 'react-router-dom'


const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const toggleMainSidebar = () => {
        dispatch(mainSideBarToggle())
    }

    const handleHomeClick = () => {
        navigate("/")
    }

    return (
        <div className='flex p-2 shadow-lg sticky bg-white top-0 justify-between' >
            <div className='flex'>
                <button className=' px-3 m-2 w-fit hover:bg-gray-200 rounded-full' onClick={toggleMainSidebar}><FontAwesomeIcon className='h-7' icon={faBars} /></button>
                <button className='cursor-pointer' onClick={handleHomeClick}><span><img className='h-10' src={Youtube} alt="Youtube" /></span></button>
            </div>
            <div className='flex w-3/6 my-3'>
                <input className='border-gray-300 border w-10/12 h-12 rounded-l-full px-4 focus:outline-blue-300' type="text" />
                <button className='border-gray-300 border rounded-r-full h-12 w-20 hover:bg-gray-200'><img className='h-10 self-center p-2 ml-3' src={Search} alt="search" /></button>
            </div>
            <div className='p-4'>
                <img className='h-10' src={Profile} alt="profile" />
            </div>
        </div >
    )
}

export default Header