import React, { Component } from "react";
import MovieList from "./components/MovieList";
import Nav from "./components/Nav";
import Pags from "./components/Pags";
import SearchInput from "./components/SearchInput";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchTerm: "",
      totalResults: 0,
      currentPage: 1,
      currentMovie: null,
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

  viewMovieInfo = (id) => {
    const filteredMovie = this.state.movies.filter((movie) => movie.id === id);

    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;

    this.setState({ currentMovie: filteredMovie });
  };

  closeMovieInfo = (id) => {
    this.setState({ currentMovie: null });
  };

  render() {
    const numberPages = Math.floor(this.state.totalResults / 20);
    return (
      <div className="App">
        <Nav />
        {this.state.currentMovie == null ? (
          <div>
            <SearchInput
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
            />
            <MovieList
              viewMovieInfo={this.viewMovieInfo}
              movies={this.state.movies}
            />
          </div>
        ) : (
          <MovieInfo
            closeMovieInfo={this.closeMovieInfo}
            currentMovie={this.state.currentMovie}
          />
        )}

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
