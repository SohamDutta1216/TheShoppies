import React from 'react'
import Movie from './Movie'
import './Movies.css'

const Movies = (props) => {
  const results = props.results
  const nominations = props.nominations
  const setNominations = props.setNominations
  const movieSearch = props.movieSearch

  return (
    <div className='aligned'>
      {movieSearch.length > 0 ?
        <div>
          <div className='ui grid'>

            {results && results.map((movie, idx) => {
              return (
                <Movie
                  key={idx}
                  movie={movie}
                  nominations={nominations}
                  setNominations={setNominations}
                />)
            })}
          </div>
        </div>
        :
        <div>
        </div>
      }
    </div >
  )
}

export default Movies