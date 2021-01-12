import React from 'react'
import './Nominations.css'
import Nominated from './Nominated.js'

export default function Nominations(props) {

  const nominations = props.nominations
  const nominatedMovies = Object.keys(nominations)
  const setNominations = props.setNominations

  const removeNomination = function (movie) {
    delete nominations[movie]
    setNominations({ ...nominations })
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Nominations</h1>
      <div>
        <div className='ui grid'>
          {nominatedMovies.length > 0 ?
            nominatedMovies.map((movie, idx) => {
              return (
                <div key={idx}>
                  <Nominated
                    removeNomination={removeNomination}
                    nominate={nominations[movie]}
                  />
                </div>
              )
            })
            :
            <div className='center'>
              <div className='ui text loader'>Loading</div>
            </div>
          }
        </div>
      </div>
    </div>

  )
}

