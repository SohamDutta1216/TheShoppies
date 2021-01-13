import React from 'react'
import './Nominations.css'
import Nominated from './Nominated.js'

export default function Nominations(props) {

  const nominations = props.nominations
  const nominatedMovies = Object.keys(nominations)
  const setNominations = props.setNominations
  const nominNum = props.nominNum
  const setNominNum = props.setNominNum

  const removeNomination = function (movie) {
    delete nominations[movie]
    setNominations({ ...nominations })
  }

  const decreaseNominNum = function () {
    setNominNum(nominNum - 1)
  }

  return (
    <div style={{ textAlign: 'center', marginBottom: '1px', marginTop: '100px' }}>
      <div>
        {nominNum === 0 ?
          <h1 style={{ textAlign: 'center', marginTop: '400px', fontSize: '50px' }}>Nominate your top 5 favorite movies!</h1>
          :
          <div className='ui grid'>
            {nominatedMovies.length > 0 ?
              nominatedMovies.map((movie, idx) => {
                return (
                  <div key={idx}>
                    <Nominated
                      nominNum={nominNum}
                      decreasNominNum={decreaseNominNum}
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


        }

      </div>
    </div >

  )
}

