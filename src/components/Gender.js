import React from "react";

const Genre = () => {
  const apiKey = "a6bf3f512c1cea4ef45df7c7029ebf76";

  return fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
  )
    .then((response) => response.json())
    .then((data) => {
      return data.genres.map((genre) => {
        return {
          id: genre.id,
          type: genre.name,
        };
      });
    });
};

export default Genre;
