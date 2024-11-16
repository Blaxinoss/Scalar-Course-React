import React from 'react'
// @ts-ignore
import { Link } from 'react-router-dom'
// @ts-ignore
import Logo from '../assets/7012714.png'

function Navbar() {
    return (
        <div className='flex border space-x-8 items-center pl-3 py-4 bg-[rgb(16,19,55)] border-0'>
            <img className='w-[50px]' src={Logo} alt="logo" />
            <Link className='text-blue-400 text-3xl font-bold font-font1' to="/">Movies</Link>
            <Link className='text-blue-400 text-3xl font-bold font-font1' to="/watchlist">Watch List</Link>

        </div>
    )
}

export default Navbar