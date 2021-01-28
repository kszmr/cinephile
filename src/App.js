import { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.performSearch("the")
  }

  performSearch (searchedInput) {
    console.log('performsearch')
    const urlString = "http://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" + searchedInput
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log('Fetched data successfully')
        const results = searchResults.results

        let movieRows = []

        results.forEach((movie) => {
          movie.posterSrc = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          const movieRow = <MovieRow movie={movie}/>
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
  }

  searchChangeHandler(event) {
    const boundObject = this
    const searchedInput = event.target.value
    boundObject.performSearch(searchedInput)
  }

  render() {
    return (
      <div className="App">
        <div className="bar">
          <img alt="app logo" width="60" src="logo.png"/>
          <h3>CinephileSearch</h3>
        </div>

        <input className="searchInput" onChange={this.searchChangeHandler.bind(this)} placeholder="Enter your favorite movie here"/>
        {this.state.rows}
      
      </div>
    );
  }
}

export default App;
