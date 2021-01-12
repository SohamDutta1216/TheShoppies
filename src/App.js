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
      }, 0)
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
    <div style={{ background: '#fbf7ed' }}>
      <div className='ui top fixed menu'>
        <div className="item">
          <img className='title' src='/logo.png' alt='' />
        </div>
        <div className="item">
          <SearchMovies
            movieSearch={movieSearch}
            setSearch={setSearch}
            setLoading={setLoading}
          />
        </div>
      </div>
      <div>
        <Nominations
          nominations={nominations}
          setNominations={setNominations}
        />
      </div>
      <div>
        <Movies
          results={results}
          movieSearch={movieSearch}
          isLoading={isLoading}
          nominations={nominations}
          setNominations={setNominations}
        />
      </div>
    </div>

  )
}


