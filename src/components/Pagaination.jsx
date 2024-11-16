import React from 'react'

function Pagaination({ handlePrev, handleNext, pageNum }) {
    return (
        <div className='bg-yellow-400 placeholder p-4 mt-8 text-center flex justify-center rounded-lg'>
            <div onClick={handlePrev} className='px-8'><i className="fa-solid fa-left-long"></i></div>

            <div className='font-bold'>{pageNum}</div>
            <div onClick={handleNext} className='px-8'><i className="fa-solid fa-right-long"></i></div>
        </div>
    )
}

export default Pagaination