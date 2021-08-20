import React from "react";

const Nav = (props) => {
  return (
    <nav className="teal lighten-3">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">
          THE MOVIEDB
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a
              href="/Users/itzelgil/themoviedbapi/src/components/TopPopular.js"
              action=""
              onChange={props.handleSubmit}
            >
              Popular Movies
            </a>
          </li>
          <li>
            <a href="#">Top Rated Movies</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// const Nav = () => {
//   return (
//     <nav className="teal accent-4">
//       <div className="nav-wrapper container">
//         <a href="#" className="brand-logo">
//           Movie finder
//         </a>
//       </div>
//     </nav>
//   );
// };

export default Nav;
