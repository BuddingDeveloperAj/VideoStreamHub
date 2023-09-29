import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { YOUTUBE_API, YOUTUBE_CATEGORIES_URL } from '../Utils/config';
import { useNavigate } from 'react-router-dom';

const TagsList = () => {
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

    const handleTagClick = async (e) => {
        navigate("/results?search_query=" + e.target.value)
    }

    useEffect(() => {
        const fetchCategroies = async () => {
            let data = await fetch(YOUTUBE_CATEGORIES_URL + YOUTUBE_API)
            let jsonData = await data.json()
            setCategories(jsonData?.items?.reverse())
        }
        fetchCategroies()
    }, [])

    const handleScrollLeft = () => {
        const container = document.getElementById('tagsListContainer');
        if (container) {
            container.scrollLeft -= 200; // You can adjust the scroll amount
        }
    };

    const handleScrollRight = () => {
        const container = document.getElementById('tagsListContainer');
        if (container) {
            container.scrollLeft += 300; // You can adjust the scroll amount
        }
    };

    return (
        <div className='grid grid-flow-col'>
            <div className='flex items-center p-2'>
                <button
                    onClick={handleScrollLeft}
                    className={`m-1 px-2 h-7 rounded-full bg-gray-100 hover:bg-gray-500 hover:text-white `}
                >
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
            </div>
            <div
                id='tagsListContainer'
                className='mx-4 flex overflow-x-hidden whitespace-nowrap py-2'
            >
                {categories.map((list) => (
                    <button
                        value={list.snippet.title}
                        onClick={(e) => handleTagClick(e)}
                        key={list.id}
                        className={`hover:bg-gray-800 flex items-center hover:text-white px-4 m-1 rounded-lg bg-gray-200`}
                    >
                        {list.snippet.title}
                    </button>
                ))}
            </div>

            <div className='flex items-center'>
                <button
                    onClick={handleScrollRight}
                    className={`m-1 px-2 h-7 rounded-full bg-gray-100 hover:bg-gray-500 hover:text-white`}
                >
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>

        </div>
    );
};

export default TagsList;


