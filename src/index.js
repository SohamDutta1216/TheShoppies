import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from './SearchMovies'

const App = () => {
  return (
    <div>
      <h1>The Shoppies</h1>
      <SearchMovies />
    </div>
  )
}





ReactDOM.render(<App />, document.querySelector('#root'));