import React, { useEffect, useState } from 'react'
import genreids from '../utility/genre'
function WatchList({ watlist, setWatlist, handleRemoveFromWatchList }) {


    const [search, setSearch] = useState('')
    const [genreList, setGenreList] = useState(['All Genres'])
    const [currentGenre, setCurrentGenre] = useState('All Genres')


    let handleSearch = (e) => {
        setSearch(e.target.value)
    }


    let sortIncreasing = () => {
        // Create a copy of the array and sort it
        let sortedIncreasing = [...watlist].sort((movieA, movieB) => {
            return movieA.vote_average - movieB.vote_average
        })

        // Update the state with the sorted array
        setWatlist(sortedIncreasing)
    }

    let sortDecreasing = () => {
        // Create a copy of the array and sort it
        let sortedDecreasing = [...watlist].sort((movieA, movieB) => {
            return movieB.vote_average - movieA.vote_average
        })

        // Update the state with the sorted array
        setWatlist(sortedDecreasing)
    }


    useEffect(() => {

        let temp = watlist.map((movie) => {
            return genreids[movie.genre_ids[0]]
        })
        temp = new Set(temp)
        setGenreList(['All Genres', ...temp])
        console.log(temp)
    }, [watlist])


    let handlefilter = (genre) => {
        setCurrentGenre(genre)
    }
    return (
        <>


            <div className='flex justify-center gap-4 flex-wrap m-4'>
                {genreList.map((genre) => (
                    <div onClick={() => { handlefilter(genre) }} className={currentGenre === genre ? ' cursor-pointer bg-blue-500 flex justify-center items-center rounded-xl font-bold text-white h-[3rem] w-[9rem]' : 'cursor-pointer bg-gray-300 flex justify-center items-center rounded-xl font-bold text-white h-[3rem] w-[9rem]'}>{genre}</div>

                ))}

            </div>
            <div className='flex justify-center my-4'>
                <input onChange={handleSearch} value={search} type="text" className='h-[3rem] w-[18rem] bg-gray-200 outline-none p-4 rounded-md' placeholder='Search Movies' />
            </div>

            <div className='border border-gray-200 m-8 rounded-lg overflow-hidden'>
                <table className='w-full text-gray-500 text-center '>
                    <thead className='border-b-2'>
                        <tr>
                            <th>Name</th>
                            <div className='flex gap-2 justify-center'>
                                <div onClick={sortDecreasing}><i className='p-2 fa-solid fa-arrow-up'></i></div>
                                <th>Ratings</th>
                                <div onClick={sortIncreasing}><i className='p-2 fa-solid fa-arrow-down'></i></div>

                            </div>

                            <th>Popularity</th>
                            <th>Genre</th>
                        </tr>
                    </thead>
                    <tbody>

                        {watlist.filter((obj) => {
                            if (currentGenre === 'All Genres')
                                return true
                            else
                                return genreids[obj.genre_ids[0]] === currentGenre
                        })

                            .filter((movie) => {
                                return movie.title.toLowerCase().includes(search.toLowerCase())
                            }).map((movie, index) => (
                                <tr key={index} className='border-b-2'>
                                    <td className='flex items-center px-6 py-4'>
                                        <img className='h-[10rem] w-[7rem]' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                                        <div className='mx-10 font-bold'>{movie.title}</div>
                                    </td>
                                    <td>{movie.vote_average}</td>
                                    <td>{movie.popularity}</td>
                                    <td>{genreids[movie.genre_ids[0]]}</td>
                                    <td onClick={() => { handleRemoveFromWatchList(movie) }} className='text-red-500 cursor-pointer'>Delete</td>
                                </tr>

                            ))}


                    </tbody>
                </table>
            </div>

        </>
    )
}

export default WatchList