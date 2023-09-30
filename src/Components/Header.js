import React, { useEffect, useRef, useState } from 'react'
import YoutubeDark from "../Asset/youtube_dark.jpg"
import YoutubeLight from "../Asset/youtube_light.png"
import Profile from "../Asset/profile-user.png"
import Search from "../Asset/search.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { mainSideBarToggle } from '../Utils/appSlice'
import { useNavigate } from 'react-router-dom'
import { YOUTUBE_SUGGESTION_URL } from '../Utils/config'
import { addSuggestion } from '../Utils/suggestionSlice'

const Header = () => {
    const [searchText, setSearchText] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)
    const darkTheme = useSelector(store => store.app.darkTheme);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const inputRef = useRef(null);
    const cache = useSelector(store => store.suggestion.suggestions) || {}

    const toggleMainSidebar = () => {
        dispatch(mainSideBarToggle())
    }

    const handleHomeClick = async () => {
        navigate("/")
    }

    const handleSearch = async (text) => {
        navigate("/results?search_query=" + text)
    }

    const handleInputBlur = () => {
        setTimeout(() => {
            if (!inputRef.current.contains(document.activeElement)) {
                setShowSuggestions(false);
            }
        }, 100);
    };



    useEffect(() => {
        const debounceSearch = async (searchText) => {
            let suggestions = []
            if (cache[searchText]) {
                suggestions = cache[searchText]
            }
            else {
                let suggestionData = await fetch(YOUTUBE_SUGGESTION_URL + searchText)
                let data = await suggestionData.text()
                data.split('[').forEach((ele, index) => {
                    if (!ele.split('"')[1] || index === 1) return;
                    return suggestions.push(ele.split('"')[1]);
                });
                function addSuggestiontoSlice() {
                    dispatch(addSuggestion({ [`${searchText}`]: suggestions }))
                }
                addSuggestiontoSlice()
            }
            setSuggestions(suggestions)
        }

        let timer
        timer = setTimeout(() => {
            if (searchText) {
                debounceSearch(searchText)
            }
        }, 200);

        return () => clearTimeout(timer)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchText])

    const searchSuggestions = async (text, op = false) => {
        setShowSuggestions(true)
        setSearchText(text)
        if (op) handleSearch(text)
    }

    return (
        <div className='grid grid-cols-8 p-2 shadow-lg sticky bg-white top-0 justify-between'       >
            <div className='flex col-span-2'>
                <button className=' px-4 m-2 hover:bg-gray-200 rounded-full' onClick={toggleMainSidebar}><FontAwesomeIcon className='h-4' icon={faBars} /></button>
                <button onClick={handleHomeClick}><span><img className='h-8 cursor-pointer' src={darkTheme ? YoutubeDark : YoutubeLight} alt="Youtube" /></span></button>
            </div>
            <div className='col-span-4'>
                <div className='flex my-3 items-center'>
                    <input
                        value={searchText}
                        ref={inputRef}
                        placeholder='Search'
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={handleInputBlur}
                        onChange={(e) => searchSuggestions(e.target.value)}
                        className='border-gray-300 border pl-5 w-10/12 h-10 rounded-l-full px-4 focus:outline-blue-300'
                        type="text" />
                    <button onClick={() => handleSearch(searchText)} className='border-gray-300 border rounded-r-full h-10 w-20 hover:bg-gray-200'><img className='h-10 self-center p-2 ml-3' src={Search} alt="search" /></button>
                </div>
                {
                    showSuggestions && suggestions.length ? (
                        <div className='fixed bg-white py-2 w-5/12 rounded-md border-b shadow-md border-gray-300'>
                            <ul className=' px-2'>
                                {
                                    suggestions.map((suggest, ind) => <li onClick={() => searchSuggestions(suggest, true)} className='py-1 pl-3 shadow-sm rounded-md hover:bg-gray-200 cursor-pointer' key={ind}><span className='pr-3'><FontAwesomeIcon icon={faMagnifyingGlass} size="sm" style={{ color: "#878787", }} /></span>{suggest}</li>)
                                }
                            </ul>
                        </div>) : ''
                }
            </div>
            <div className='p-4 col-span-2 flex justify-end'>
                <img className='h-8 cursor-pointer' src={Profile} alt="profile" />
            </div>
        </div >
    )
}

export default Header