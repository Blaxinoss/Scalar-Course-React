import axios from 'axios'
import React, { useState } from 'react'

function Banner({ watlist, setWatlist }) {
    const [bannerImage, setBannerImage] = useState(null)
    const [me, setMe] = useState('')

    const addSearch = async (e) => {
        if (e.key === 'Enter') {
            let searchTerm = e.target.value
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/search/movie?api_key=b45e47c5c9e262954df5a55c18a27b2c&query=${encodeURIComponent(searchTerm)}`
                )
                const movie = response.data.results[0]
                if (movie) {
                    setBannerImage({
                        title: movie.title,
                        poster_path: movie.poster_path,
                    })
                    setWatlist([movie])
                    setMe('')
                    console.log(movie.title)
                }
            } catch (error) {
                console.error('Error fetching movie data', error)
            }
        }
    }

    const resetSearch = () => {
        setWatlist([])
    }

    const searchChange = (e) => {
        setMe(e.target.value)
    }

    return (
        <div
            className="h-[20vh] md:h-[60vh] bg-cover bg-center flex items-end"
            style={{
                backgroundImage: bannerImage?.poster_path
                    ? `url(https://image.tmdb.org/t/p/original/${bannerImage.poster_path})`
                    : `url(https://images.hdqwalls.com/download/oppenheimer-2w-1920x1080.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="relative text-white text-center text-xl bg-gray-900/60 w-full p-4">
                {bannerImage ? bannerImage.title : 'Oppenheimer'}
            </div>

            <button className='p-2 m-2 rounded-md absolute top-[86px] bg-white left-[200px]' onClick={resetSearch}>reset</button>

            <input
                className="p-2 m-2 rounded-md absolute top-[86px]"
                placeholder="Search Banner"
                type="search"
                value={me}
                onChange={searchChange}
                onKeyDown={addSearch}
            />
        </div>
    )
}

export default Banner
