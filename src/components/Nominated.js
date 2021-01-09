import React from 'react'
import './Nominated.css'

const Nominated = (props) => {
  const movie = props.nominate
  return (
    <div className='ui segment'>
      <h3 className='center'>{movie.Title}</h3>
      <div>
        <p className='center'>{movie.Year}</p>
        <img className='photo' src={movie.Poster} alt=''></img>
      </div>
      <br />
    </div>
  )
}

export default Nominated