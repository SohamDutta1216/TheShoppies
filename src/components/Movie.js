import React from 'react'
import './Movie.css'
import Tada from 'react-reveal/Tada';

export default function Movie(props) {
  const movie = props.movie
  const nominations = props.nominations
  const setNominations = props.setNominations
  const nominNum = props.nominNum
  const setNominNum = props.setNominNum

  function click() {
    setNominations({ ...nominations, [movie.Title]: [movie] })
    movie.clicked = true
    setNominNum(nominNum + 1)
  }
  return (

    <div className='contain'>
      <img className='photo' src={movie.Poster} alt='Poster'></img>
      <h3 className='center'>{movie.Title}</h3>
      <div>
        <p className='center'>{movie.Year}</p>
      </div>
      <br />
      {movie.clicked === true ?
        <div className='center-button'>
          <Tada>
            <button className='ui disabled teal button'
            >Nominate</button>
          </Tada>
        </div>

        :
        <div>
          <div className='center-button'>
            <button className='ui teal button'
              onClick={click}
            >Nominate</button>
          </div>
        </div>

      }


    </div>
  )
}


