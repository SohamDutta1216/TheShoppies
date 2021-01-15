import React from 'react';
import SearchMovies from './components/SearchMovies'
import Movies from './components/Movies'
import Nominations from './components/Nominations'
import './App.css'
import Tada from 'react-reveal/Tada';
import FetchData from './hooks/fetchData'

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
            isLoading={isLoading}
            setLoading={setLoading}
          />
        </div>
        <div className='item'>

          <div className="ui large buttons">
            <button className="ui button"
              onClick={movies}
            >Movies</button>
            <div className="or"></div>
            <Tada spy={nominNum}>
              <button className="ui button"
                onClick={myNominations}
              >My Nominations {nominNum}/5</button>
            </Tada>
          </div>
        </div>
      </div>
      { nominNum === 5 ?
        <div>
          <h1 style={{ textAlign: 'center', marginTop: '150px', fontSize: '60px' }}>Your Top 5 Movie Nominations!</h1>
          <Nominations
            nominNum={nominNum}
            setNominNum={setNominNum}
            nominations={nominations}
            setNominations={setNominations}
          />
        </div>
        :
        <div>
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
                setLoading={setLoading}
                nominations={nominations}
                setNominations={setNominations}
              />
            </div>
          }
        </div>
      }

    </div>

  )
}


