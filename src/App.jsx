import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Banner from './components/Banner'
import Movies from './components/Movies'
import Navbar from './components/Navbar'
import WatchList from './components/WatchList'
function App() {

  const [watlist, setWatlist] = useState([])

  let handleAddToWatchList = (movieObj) => {

    let newwatlist = ([...watlist, movieObj])
    setWatlist(newwatlist)
    localStorage.setItem('moviesApp', JSON.stringify(newwatlist))
    console.log(newwatlist)
  }


  let handleRemoveFromWatchList = (movieObj) => {

    let filteredlist = watlist.filter((mov) => {
      return mov.id !== movieObj.id
    })
    setWatlist(filteredlist)
    localStorage.setItem('moviesApp', JSON.stringify(filteredlist));
  }


  useEffect(() => {
    if (localStorage.length !== 0) {
      let movieslocalstorage = localStorage.getItem("moviesApp")
      setWatlist(JSON.parse(movieslocalstorage))
    }
  }, [])


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<>  <Banner watlist={watlist} setWatlist={setWatlist} /> <Movies watch={watlist} handleAddToWatchList={handleAddToWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} />
          </>}></Route>
          <Route path='/watchlist' element={<WatchList watlist={watlist} setWatlist={setWatlist} handleRemoveFromWatchList={handleRemoveFromWatchList} />}></Route>

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
