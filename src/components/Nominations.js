import React from 'react'
import './Nominations.css'
import Nominated from './Nominated.js'

const Nominations = (props) => {
  const nominatedMovies = Object.keys(props.nominations)
  return (
    <div className='ui column'>
      <div className='ui segment'>
        <h1 className='center'>Nominations</h1>
        <div>
          {nominatedMovies.length > 0 ?
            nominatedMovies.map((nominate, idx) => {
              return (
                <div key={idx}>
                  <Nominated
                    nominate={props.nominations[nominate]}
                  />
                </div>
              )
            })
            :
            <div>...</div>
          }
        </div>
      </div>
    </div>
  )
}

export default Nominations