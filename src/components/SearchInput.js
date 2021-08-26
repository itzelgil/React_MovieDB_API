import React from "react";
import { Button } from "react-bootstrap";

const SearchInput = (props) => {
  return (
    <div className="container">
      <div className="row">
        <section className="col s5 offset-s4">
          <form action="" onSubmit={props.handleSubmit}>
            <div className="input-field">
              <input
                placeholder="Search movie or serie by name, actor, genre or year"
                type="text"
                onChange={props.handleChange}
              />
              <Button
                onChange={props.handleSubmit}
                variant="outline-info"
                className="cyan darken-2"
                id="buttonSearch"
              >
                Search
              </Button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default SearchInput;
