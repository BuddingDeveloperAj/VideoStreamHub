import React from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faFireFlameCurved, faHouse, faClockRotateLeft, faRug, faBoxOpen, faScissors, faStar, faGear } from '@fortawesome/free-solid-svg-icons'
import { faCircleDot, faClock, faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const mainSlidebar = useSelector(store => store.app.isMainSideBar)
    if (mainSlidebar) {
        return (
            <div className='w-16 '>
                <ul>
                    <Link to="/"><li className='hover:bg-gray-200 p-2 rounded-lg pointer flex flex-col my-2 items-center bg-gray-200' title='Home'>
                        <button><FontAwesomeIcon icon={faHouse} style={{ color: "#000000", }} /></button>
                        <p className=' text-xs'>Home</p>
                    </li></Link>
                    <li className='hover:bg-gray-200 p-2 rounded-lg pointer flex flex-col my-2  items-center' title='Shorts'>
                        <button><FontAwesomeIcon icon={faFireFlameCurved} style={{ color: "#000000", }} /></button>
                        <p className='text-xs'>Shorts</p>
                    </li>
                    <li className='hover:bg-gray-200 p-2 rounded-lg pointer flex flex-col my-2  items-center' title='Subscriptions'>
                        <button><FontAwesomeIcon icon={faRug} style={{ color: "#000000", }} /></button>
                        <p className=' text-xs'>Subscriptions</p>
                    </li>
                    <li className='hover:bg-gray-200 p-2 rounded-lg pointer flex flex-col my-2 items-center' title='Library'>
                        <button><FontAwesomeIcon icon={faHouse} size='xl' style={{ color: "#000000", }} /></button>
                        <p className=' text-xs'>Library</p>
                    </li>
                </ul>

            </div>
        )
    }
    return (
        <div className="flex flex-col w-56 overflow-y">
            <div className='my-2'>
                <ul>
                    <Link to="/"><li className='hover:bg-gray-300 p-2 rounded-lg pointer text-lg font-semibold bg-gray-200'><button><FontAwesomeIcon className='px-2' icon={faHouse} style={{ color: "#000000", }} /> Home</button></li>
                    </Link>
                    <li className='hover:bg-gray-300 p-2 rounded-lg pointer text-lg'><button><FontAwesomeIcon className='px-3' icon={faFireFlameCurved} style={{ color: "#000000", }} />Shorts</button></li>
                    <li className='hover:bg-gray-300 p-2 rounded-lg pointer text-lg '><button><FontAwesomeIcon className='px-2' icon={faRug} style={{ color: "#000000", }} />Subscriptions</button></li>
                </ul>
            </div>
            <p className='border border-b'></p>
            <div className='my-2'>
                <ul>
                    <li className='hover:bg-gray-300 p-2 rounded-lg pointer text-lg '><button><FontAwesomeIcon className='px-3' icon={faClockRotateLeft} />History</button></li>
                    <li className='hover:bg-gray-300 p-2 rounded-lg pointer text-lg '><button><FontAwesomeIcon className='px-3' icon={faBoxOpen} style={{ color: "#000000", }} />Your videos</button></li>
                    <li className='hover:bg-gray-300 p-2 rounded-lg pointer text-lg '><button><FontAwesomeIcon className='px-3' icon={faClock} style={{ color: "#000000", }} />Watch later</button></li>
                    <li className='hover:bg-gray-300 p-2 rounded-lg pointer text-lg '><button><FontAwesomeIcon className='px-3' icon={faScissors} style={{ color: "#000000", }} />Your clips</button></li>
                    <li className='hover:bg-gray-300 p-2 rounded-lg pointer text-lg '><button><FontAwesomeIcon className='px-3' icon={faThumbsUp} style={{ color: "#000000", }} />Liked videos</button></li>
                </ul>
            </div>
            <p className='border border-b'></p>
            <div className='my-2'>
                <ul>
                    <li className='hover:bg-gray-300 p-2 rounded-lg pointer text-lg '><button><FontAwesomeIcon className='px-3' icon={faStar} />Favourite</button></li>
                    <li className='hover:bg-gray-300 p-2 rounded-lg pointer text-lg '><button><FontAwesomeIcon className='px-3' icon={faCircleDot} />Live</button></li>
                    <li className='hover:bg-gray-300 p-2 rounded-lg pointer text-lg '><button><FontAwesomeIcon className='px-3' icon={faGear} />Settings</button></li>
                </ul>
            </div>
            <p className='border border-b'></p>
            <div className='my-2'>
                <p className='p-2 font-medium text-lg'>Subscriptions</p>
                <ul>
                    <li className='hover:bg-gray-300 p-2 rounded-lg pointer text-lg truncate'><button><FontAwesomeIcon className='px-3' icon={faCircleUser} size="xl" />T-Series</button></li>
                    <li className='hover:bg-gray-300 p-2 rounded-lg pointer text-lg truncate'><button><FontAwesomeIcon className='px-3' icon={faCircleUser} size="xl" />Sony</button></li>
                    <li className='hover:bg-gray-300 p-2 rounded-lg pointer text-lg truncate'><button><FontAwesomeIcon className='px-3' icon={faCircleUser} size="xl" />Mr Beast</button></li>
                    <li className='hover:bg-gray-300 p-2 rounded-lg pointer text-lg truncate'><button><FontAwesomeIcon className='px-3' icon={faCircleUser} size="xl" />Namaste Javascript</button></li>
                    <li className='hover:bg-gray-300 p-2 rounded-lg pointer text-lg truncate'><button><FontAwesomeIcon className='px-3' icon={faCircleUser} size="xl" />A2D</button></li>
                    <li className='hover:bg-gray-300 p-2 rounded-lg pointer text-lg truncate'><button><FontAwesomeIcon className='px-3' icon={faCircleUser} size="xl" />T-Series</button></li>
                    <li className='hover:bg-gray-300 p-2 rounded-lg pointer text-lg truncate'><button><FontAwesomeIcon className='px-3' icon={faCircleUser} size="xl" />Sony</button></li>
                    <li className='hover:bg-gray-300 p-2 rounded-lg pointer text-lg truncate'><button><FontAwesomeIcon className='px-3' icon={faCircleUser} size="xl" />Namaste Javascript</button></li>
                    <li className='hover:bg-gray-300 p-2 rounded-lg pointer text-lg truncate'><button><FontAwesomeIcon className='px-3' icon={faCircleUser} size="xl" />A2D</button></li>
                    <li className='hover:bg-gray-300 p-2 rounded-lg pointer text-lg truncate'><button><FontAwesomeIcon className='px-3' icon={faCircleUser} size="xl" />T-Series</button></li>
                    <li className='hover:bg-gray-300 p-2 rounded-lg pointer text-lg truncate'><button><FontAwesomeIcon className='px-3' icon={faCircleUser} size="xl" />Sony</button></li>
                    <li className='hover:bg-gray-300 p-2 rounded-lg pointer text-lg truncate'><button><FontAwesomeIcon className='px-3' icon={faCircleUser} size="xl" />Namaste Javascript</button></li>
                    <li className='hover:bg-gray-300 p-2 rounded-lg pointer text-lg truncate'><button><FontAwesomeIcon className='px-3' icon={faCircleUser} size="xl" />A2D</button></li>
                    <li className='hover:bg-gray-300 p-2 rounded-lg pointer text-lg truncate'><button><FontAwesomeIcon className='px-3' icon={faCircleUser} size="xl" />T-Series</button></li>
                    <li className='hover:bg-gray-300 p-2 rounded-lg pointer text-lg truncate'><button><FontAwesomeIcon className='px-3' icon={faCircleUser} size="xl" />Sony</button></li>
                    <li className='hover:bg-gray-300 p-2 rounded-lg pointer text-lg truncate'><button><FontAwesomeIcon className='px-3' icon={faCircleUser} size="xl" />Mr Beast</button></li>
                    <li className='hover:bg-gray-300 p-2 rounded-lg pointer text-lg truncate'><button><FontAwesomeIcon className='px-3' icon={faCircleUser} size="xl" />Namaste Javascript</button></li>
                    <li className='hover:bg-gray-300 p-2 rounded-lg pointer text-lg truncate'><button><FontAwesomeIcon className='px-3' icon={faCircleUser} size="xl" />A2D</button></li>
                </ul>
            </div>
        </div >
    )
}

export default Sidebar