import React from 'react'
import Movie from './Movie'
import './Movies.css'

const Movies = (props) => {
  return (
    <div className='ui column' >
      <div className='ui segment'>
        <h1 className='center'>Movies</h1>
        {props.movieSearch.length > 0 ?
          <div>{props.results && props.results.map((movie, idx) => {
            return (
              <Movie
                key={idx}
                movie={movie} />
            )
          })}</div> :
          <div className='center'> ... </div>
        }
      </div>
    </div>
  )
}

export default Movies