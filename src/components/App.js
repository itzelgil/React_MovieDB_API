import React, { Component } from "react";
import Nav from "./Nav";
import SearchInput from "./SearchInput";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      searchTerm: "",
    };
    this.apiKey = process.env.REACT_MOVIEAPP_API;
  }
  handleSubmit = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`
    )
      .then((data) => data.json())
      .then((data) => {});
  };

  handleChange = () => {};
  render() {
    return (
      <div className="App">
        <Nav />
        <SearchInput />
      </div>
    );
  }
}

export default App;
