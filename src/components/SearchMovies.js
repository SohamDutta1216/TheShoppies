import React from 'react'

export default function searchMovies(props) {
  const setLoading = props.setLoading
  const setSearch = props.setSearch
  const movieSearch = props.movieSearch
  return (

    <div className="ui category search">
      <br />
      <div className="ui massive icon input">
        <input className="prompt" type="text" placeholder="Search Movies"
          value={movieSearch}
          onChange={e => {
            setLoading(true)
            setSearch(e.target.value)
          }}
        />
        <i className="search icon"></i>
      </div>
      <div className="results"></div>
    </div>


  )
}
