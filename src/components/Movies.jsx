import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import Pagaination from './Pagaination'

function Movies({ handleAddToWatchList, handleRemoveFromWatchList, watch }) {

    const [movies, setMovies] = useState([])
    const [pageNum, setPageNum] = useState(1)

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b45e47c5c9e262954df5a55c18a27b2c&language=en-US&page=${pageNum}`)
            .then((data) => setMovies(data.data.results))

    }, [pageNum])

    const handleNext = () => {
        setPageNum(pageNum + 1)
    }

    const handlePrev = () => {
        if (pageNum == 1) {
            return
        }
        setPageNum(pageNum - 1)
    }

    return (
        <div className='p-5 bg-gray-900'>
            <div className='text-2xl m-5 font-bold text-center text-white'>
                Trending Movies
            </div>
            <div className='flex flex-row flex-wrap justify-around gap-5'>
                {watch.length > 7 ? (
                    // If there's a movie in the watchlist, display it
                    watch.map((mov, index) => (
                        <MovieCard
                            watch={watch}
                            key={index}
                            posterPath={mov.poster_path}
                            name={mov.original_title}
                            handleAddToWatchList={handleAddToWatchList}
                            handleRemoveFromWatchList={handleRemoveFromWatchList}
                            movieObj={mov}
                        />
                    ))
                ) : (
                    // If watchlist is empty, display popular movies
                    movies.map((mov, index) => (
                        <MovieCard
                            watch={watch}
                            key={index}
                            posterPath={mov.poster_path}
                            name={mov.original_title}
                            handleAddToWatchList={handleAddToWatchList}
                            handleRemoveFromWatchList={handleRemoveFromWatchList}
                            movieObj={mov}
                        />
                    ))
                )}
            </div>
            <Pagaination handleNext={handleNext} handlePrev={handlePrev} pageNum={pageNum} />
        </div>
    )
}

export default Movies

