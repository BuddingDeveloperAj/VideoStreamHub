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
    "Music"
]

const TagsList = () => {

    const [selectedIndex, setIndex] = useState(null)

    const handleButton = (index) => {
        setIndex(index)
    }

    return (
        <div className='m-2 ml-6 flex'>
            {listData.map((list, ind) => <button key={ind} onClick={() => handleButton(ind)} className={`hover:bg-gray-800 hover:text-white py-2 px-2 m-1 rounded-lg bg-gray-200 ${selectedIndex === ind ? 'bg-gray-800 text-white' : ''}`}>{list}</button>)}
        </div>
    )
}

export default TagsList;