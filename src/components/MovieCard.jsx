import React from 'react'

function MovieCard({ watch, movieObj, posterPath, name, handleAddToWatchList, handleRemoveFromWatchList }) {

    function doesContain(movieObj) {
        for (let x = 0; x < watch.length; x++) {
            if (watch[x].id === movieObj.id) {
                return true
            }

        }
        return false
    }

    return (
        <div className='h-[40vh] w-[250px] relative bg-cover bg-center rounded-xl hover:cursor-pointer hover:scale-110 duration-300'
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${posterPath})` }}>

            <div className='text-white text-xl w-full p-2 text-center bg-gray-900/60'>
                {name}
            </div>

            {doesContain(movieObj) ? (
                <div onClick={() => { handleRemoveFromWatchList(movieObj) }} className='m-4 absolute bottom-0 right-0 bg-gray-900/90 p-1  rounded-lg text-2xl'>&#10060;</div>
            )
                : (<div onClick={() => (handleAddToWatchList(movieObj))} className='m-4 absolute bottom-0 right-0 bg-gray-900/90 p-1  rounded-lg text-2xl'>
                    &#128525;
                </div>)}


        </div>
    )
}

export default MovieCard