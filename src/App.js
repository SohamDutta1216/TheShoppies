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
  const [toggle, setToggle] = useState(false)
  const [nominNum, setNominNum] = useState(0)
  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?apikey=d5633076&s=${movieSearch}`).then(res => {
      setTimeout(() => {
        setLoading(false)
        setResults(res.data.Search)
      }, 0)
    })
  }, [movieSearch])
  return {
    results, setResults, movieSearch, setSearch, isLoading, setLoading, nominations, setNominations, toggle, setToggle, nominNum, setNominNum
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
    toggle,
    setToggle, nominNum, setNominNum
  } = FetchData();

  function movies() {
    setToggle(false)
  }
  function myNominations() {
    setToggle(true)
  }

  return (
    <div>
      <div className='ui inverted top fixed three item menu'>
        <div className="item">
          <img className='logo' src='/logo.png' alt='' />
        </div>
        <div className="item">
          <SearchMovies
            movieSearch={movieSearch}
            setSearch={setSearch}
            setLoading={setLoading}
          />
        </div>
        <div className='item'>

          <div className="ui large buttons">
            <button className="ui button"
              onClick={movies}
            >Movies</button>
            <div className="or"></div>
            <button className="ui button"
              onClick={myNominations}
            >My Nominations {nominNum}/5</button>
          </div>
        </div>
      </div>

      {toggle === true ?
        <div>
          <Nominations
            nominNum={nominNum}
            setNominNum={setNominNum}
            nominations={nominations}
            setNominations={setNominations}
          />
        </div>
        :
        <div>
          <Movies
            nominNum={nominNum}
            setNominNum={setNominNum}
            results={results}
            movieSearch={movieSearch}
            isLoading={isLoading}
            nominations={nominations}
            setNominations={setNominations}
          />
        </div>
      }


    </div>

  )
}


