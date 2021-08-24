import React from "react";
import { Button } from "react-bootstrap";

const SearchInput = (props) => {
  return (
    <div className="container">
      <div className="row">
        <section className="col s4 offset-s4">
          <form action="" onSubmit={props.handleSubmit}>
            <div className="input-field">
              <input
                placeholder="Search movie"
                type="text"
                onChange={props.handleChange}
              />
              <Button
                onChange={props.handleSubmit}
                variant="outline-info"
                className="deep-purple lighten-2"
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
