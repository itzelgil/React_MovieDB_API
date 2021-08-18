import React, { Component } from "react";
import MovieList from "./MovieList";
import Nav from "./Nav";
import Pags from "./Pags";
import SearchInput from "./SearchInput";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchTerm: "",
      totalResults: 0,
      currentPage: 1,
    };
    this.apiKey = "a6bf3f512c1cea4ef45df7c7029ebf76";
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        this.setState({
          movies: [...data.results],
          totalResults: data.total_results,
        });
      });
  };

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  nextPage = (pageNumber) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        this.setState({ movies: [...data.results], currentPage: pageNumber });
      });
  };

  render() {
    const numberPages = Math.floor(this.state.totalResults / 20);
    return (
      <div className="App">
        <Nav />
        <SearchInput
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <MovieList movies={this.state.movies} />
        {this.state.totalResults > 20 && this.state.currentMovie == null ? (
          <Pags
            pages={numberPages}
            nextPage={this.nextPage}
            currentPage={this.state.currentPage}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
