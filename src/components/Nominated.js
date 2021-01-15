import React from 'react'

export default function Nominated(props) {

  const movie = props.nominate[0]
  const removeNomination = props.removeNomination
  const decreasNominNum = props.decreasNominNum

  function click() {
    removeNomination(movie.Title)
    movie.clicked = false
    decreasNominNum()
  }


  return (

    <div style={{ marginTop: '100px' }}>

      <img style={{
        height: '300px',
        width: '200px',
        display: 'block',
        marginLeft: '65px',
        marginRight: '65px',
      }} src={movie.Poster} alt='' />

      <h3 style={{ textAlign: 'center' }}>{movie.Title}</h3>
      <div>
        <p style={{ textAlign: 'center' }}>{movie.Year}</p>
      </div>
      <br />
      <div style={{ textAlign: 'center' }}>
        <button className='ui red button center'
          onClick={click}
        >
          Remove
      </button>
      </div>
    </div>
  )
}
