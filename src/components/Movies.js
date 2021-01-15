import React from 'react'
import Movie from './Movie'
import Fade from 'react-reveal/Fade';


export default function Movies(props) {

  const results = props.results
  const nominations = props.nominations
  const setNominations = props.setNominations
  const movieSearch = props.movieSearch
  const nominNum = props.nominNum
  const setNominNum = props.setNominNum
  const isLoading = props.isLoading

  return (
    <div style={{ textAlign: 'center', marginTop: '250px' }}>
      {movieSearch.length > 0 ?
        isLoading === true ?
          <div className="ui massive active loader"></div>
          : <div>
            <h1 style={{ textAlign: 'center' }}>Search results for "{movieSearch}"</h1>
            <div className='ui grid'>
              {results && results.map((movie, idx) => {
                return (
                  <Movie
                    nominNum={nominNum}
                    setNominNum={setNominNum}
                    key={idx}
                    movie={movie}
                    nominations={nominations}
                    setNominations={setNominations}
                  />)
              })}
            </div>
          </div>
        :
        <div>
          <Fade left>
            <h1 style={{ textAlign: 'center', top: '40%', left: '30%', position: 'absolute', fontSize: '50px' }}>Search for your favorite movies!</h1>
          </Fade>
        </div>
      }
    </div >
  )



}


