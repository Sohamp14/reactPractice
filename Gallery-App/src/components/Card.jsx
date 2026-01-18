import React from 'react'

const Card = ({ elem }) => {
    return (
        <div className="bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300">
            <a href={elem.url} target="_blank" rel="noopener noreferrer" className="block">
                {/* Image container */}
                <div className="h-48 w-full overflow-hidden rounded-t-xl">
                    <img
                        className="h-full w-full object-cover"
                        src={elem.download_url}
                        alt={elem.author}
                    />
                </div>

                {/* Author name */}
                <h2 className="bg-amber-400 text-black font-semibold text-center py-2 rounded-b-xl text-sm sm:text-base hover:bg-amber-500 transition-colors">
                    {elem.author}
                </h2>
            </a>
        </div>
    )
}

export default Card