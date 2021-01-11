import React, { useEffect, useState } from 'react';
import SearchMovies from './components/SearchMovies'
import Movies from './components/Movies'
import Nominations from './components/Nominations'
import axios from 'axios'
import './App.css'

function FetchData() {

  const [movieSearch, setSearch] = useState('')
  const [results, setResults] = useState([])
  const [nominations, setNominations] = useState({})
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?apikey=d5633076&s=${movieSearch}`).then(res => {
      setTimeout(() => {
        setLoading(false)
        setResults(res.data.Search)
      }, 10)
    })
  }, [movieSearch])
  return {
    results, setResults, movieSearch, setSearch, isLoading, setLoading, nominations, setNominations
  }
}

export default function App() {

  const {
    results,
    movieSearch,
    isLoading,
    setSearch,
    setLoading,
    nominations,
    setNominations,
  } = FetchData();
  return (
    <div>
      <div className='title'>
        <h1 className='ui center aligned huge header'>The Shoppies</h1>
      </div>
      <div className='ui divider' />
      <SearchMovies
        movieSearch={movieSearch}
        setSearch={setSearch}
        setLoading={setLoading}
      />
      <div className='float-container'>
        <div className='float-child'>
          <Movies
            results={results}
            movieSearch={movieSearch}
            isLoading={isLoading}
            nominations={nominations}
            setNominations={setNominations}
          />
        </div>
        <div className='float-child'>
          <Nominations
            nominations={nominations}
            setNominations={setNominations}
          />
        </div>
      </div>
    </div>

  )
}


