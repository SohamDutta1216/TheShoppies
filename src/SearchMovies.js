import React from 'react'

export default class SearchMovies extends React.Component {
  state = {
    searchWord: ''
  }
  render() {
    return (
      <div>
        <div className="ui category search">
          <div className="ui icon input">
            <input className="prompt" type="text" placeholder="Search Movies" />
            <button>Search</button>
          </div>
          <div className="results"></div>
        </div>
      </div>
    )
  }
}