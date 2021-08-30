import React, { Component } from "react";
import MovieInfo from "./components/MovieInfo";
import MovieList from "./components/MovieList";
import Pags from "./components/Pags";
import logo from "./logo.png";
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
      `https://api.themoviedb.org/3/search/multi?api_key=${this.apiKey}&language=en-US&page=1&query=${this.state.searchTerm}`
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

  top10() {
    fetch(
      `
      https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}&page=1`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        data.results = data.results.slice(0, 10);
        data.totalResults = 10;
        this.setState({
          movies: [...data.results],
          totalResults: 10,
        });
      });
  }

  nextPage = (pageNumber) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&language=en-US&page=${pageNumber}`
    )
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          movies: [...data.results],
          totalResults: data.total_results,
          currentPage: pageNumber,
        });
      });
  };

  viewMovieInfo = (id) => {
    let filteredMovie;
    this.state.movies.forEach((movie, i) => {
      if (movie.id === id) {
        filteredMovie = movie;
      } else {
      }
    });

    this.setState({ currentMovie: filteredMovie });
  };

  closeMovieInfo = () => {
    this.setState({ currentMovie: null });
  };

  render() {
    const numberPages = Math.floor(this.state.totalResults / 20);
    return (
      <div>
        <nav className="cyan darken-2">
          <div className="nav-wrapper">
            <a
              href="/Users/itzelgil/themoviedbapi/src/App.js"
              class="brand-logo"
            >
              <img
                src={logo}
                alt="logo"
                className="logo"
                width="90"
                height="70"
              />
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="/Users/itzelgil/themoviedbapi/src/App.js">Home</a>
              </li>
              <li>
                <a href="#" onClick={(e) => this.top10()}>
                  Top 10 Movies
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {this.state.currentMovie === null ? (
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
        {this.state.totalResults > 20 && this.state.currentMovie === null ? (
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
