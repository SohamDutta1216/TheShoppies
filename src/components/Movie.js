import React from 'react'
import './Movie.css'


const Movie = (props) => {
  return (
    <div className='ui segment'>
      <h3 className='center'>{props.movie.Title}</h3>
      <div>
        <p className='center'>{props.movie.Year}</p>
        <img className='photo' src={props.movie.Poster} alt=''></img>
      </div>
      <br />
      <div className='center-button'>
        <button className='ui teal button'
          onClick={() => props.setNominations({
            ...props.nominations,
            [props.movie.Title]: [props.movie]
          })}
        >Nominate</button>
      </div>
    </div>
  )
}

export default Movie
