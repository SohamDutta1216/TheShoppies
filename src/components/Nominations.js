import React from 'react'
import './Nominations.css'
import Nominated from './Nominated.js'
import Fade from 'react-reveal/Fade';

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
    <div style={{ textAlign: 'center', marginBottom: '1px', marginTop: '100px', backgroundColor: '#e0e1e2' }}>
      <div>
        {nominNum === 0 ?
          <Fade right>
            <h1 style={{ textAlign: 'center', top: '40%', left: '28%', position: 'absolute', fontSize: '50px' }}>Nominate your top 5 favorite movies!</h1>
          </Fade>
          :
          <Fade right>
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
          </Fade>


        }

      </div>
    </div >

  )
}

