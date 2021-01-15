import React from 'react'
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

  function addDefaultSrc(ev) {
    ev.target.src = 'default.jpg'
  }

  return (

    <div style={{ marginTop: '30px', marginBottom: '20px' }}>
      <img style={{
        height: '300px',
        width: '200px',
        display: 'block',
        marginLeft: '100px',
        marginRight: '100px',
        marginTop: '40px',
        marginBottom: '40px'
      }} src={movie.Poster}
        alt='Poster'
        onError={addDefaultSrc}
      />

      <h3 style={{ textAlign: 'center' }}>{movie.Title}</h3>
      <div>
        <p style={{ textAlign: 'center' }}>{movie.Year}</p>
      </div>
      <br />
      {movie.clicked === true ?
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <Tada>
            <button className='ui disabled teal button'
            >Nominate</button>
          </Tada>
        </div>

        :
        <div>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <button className='ui teal button'
              onClick={click}
            >Nominate</button>
          </div>
        </div>

      }
    </div>
  )
}


