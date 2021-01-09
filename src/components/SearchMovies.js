import React from 'react'

const searchMovies = (props) => {
  return (
    <div className='ui center aligned container'>
      <div className="ui category search">
        <div className="ui icon input">
          <input className="prompt" type="text" placeholder="Search Movies"
            value={props.movieSearch}
            onChange={event => {
              props.setLoading(true)
              props.setSearch(event.target.value)
            }}
          />
          <i className="search icon"></i>
        </div>
        <div className="results"></div>
      </div>
    </div>
  )
}

export default searchMovies