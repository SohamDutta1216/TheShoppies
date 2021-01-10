import React from 'react'
import './Nominated.css'

export default function Nominated(props) {
  const movie = props.nominate[0]
  const removeNomination = props.removeNomination

  function click() {
    removeNomination(movie.Title)
    movie.clicked = false
    console.log(movie)
  }


  return (
    <div className='ui segment'>
      <h3 className='center'>{movie.Title}</h3>
      <div>
        <p className='center'>{movie.Year}</p>
        <img className='photo' src={movie.Poster} alt=''></img>
      </div>
      <br />
      <div className='center'>
        <button className='ui red button center'
          onClick={click}
        >
          Remove
      </button>
      </div>
    </div>
  )
}
