import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
const listData = [
    "All",
    "Javascript",
    "Learning",
    "Music",
    "Cricket",
    "Live",
    "Gadgets",
    "Tamil Cinema",
    "Bollywood",
    "Kollywood",
    "Live",
    "Gadgets",
    "Tamil Cinema",
    "Bollywood",
    "Kollywood",
    "Javascript",
    "Music",
    "Tamil Cinema",
    "Bollywood",
    "Kollywood",
    "Javascript",
    "Music"
]

const TagsList = () => {
    const [scrollX, setScrollX] = useState(0);

    const handleScrollLeft = () => {
        const container = document.getElementById('tagsListContainer');
        if (container) {
            container.scrollLeft -= 100; // You can adjust the scroll amount
        }
    };

    const handleScrollRight = () => {
        const container = document.getElementById('tagsListContainer');
        if (container) {
            container.scrollLeft += 100; // You can adjust the scroll amount
        }
    };

    return (
        <div className='flex items-center'>
            <button
                onClick={handleScrollLeft}
                className={`ml-2 p-2 rounded-lg bg-gray-100 hover:bg-gray-500 hover:text-white ${scrollX > 0 ? '' : 'hidden'
                    }`}
            >
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <div
                id='tagsListContainer'
                className='m-2 ml-6 flex overflow-x-hidden'
                style={{
                    maxWidth: '',
                    whiteSpace: 'nowrap',
                }}
            >
                {listData.map((list, ind) => (
                    <button
                        key={ind}
                        className={`hover:bg-gray-800 flex items-center hover:text-white px-4 m-1 rounded-lg bg-gray-200`}
                    >
                        {list}
                    </button>
                ))}
            </div>

            <button
                onClick={handleScrollRight}
                className={`ml-2 p-2 rounded-lg bg-gray-100 hover:bg-gray-500 hover:text-white`}
            >
                <FontAwesomeIcon icon={faAngleRight} />
            </button>
        </div>
    );
};

export default TagsList; 