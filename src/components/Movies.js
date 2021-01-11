import React from 'react'
import Movie from './Movie'
import './Movies.css'

const Movies = (props) => {
  const results = props.results
  const nominations = props.nominations
  const setNominations = props.setNominations
  const movieSearch = props.movieSearch

  return (
    <div>
      <div className='ui segment'>
        <h1 className='center'>Movies</h1>
        {movieSearch.length > 0 ?
          <div>{results && results.map((movie, idx) => {
            return (
              <Movie
                key={idx}
                movie={movie}
                nominations={nominations}
                setNominations={setNominations}
              />

            )
          })}</div>
          :
          <div className='center'>
            <div className='ui text loader'>Loading</div>
          </div>
        }
      </div>
    </div>
  )
}

export default Movies