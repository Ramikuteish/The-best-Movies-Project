import React, { useState, useEffect } from "react";
import MoviePart from "./MoviePart";
import MoviesInfo from "./MoviesInfo";

const Movies = () => {
  const [moviesInfo, setMoviesInfo] = useState(MoviesInfo);
  const [visibleMovies, setVisibleMovies] = useState(MoviesInfo);
  const [search, setSearch] = useState("");
  const mapping = (x) => {
    const films = x.map((film) => (
      <MoviePart
        key={film.id}
        img={film.img}
        name={film.name}
        release_dates={film.release_dates}
        running_time={film.running_time}
        language={film.language}
      />
    ));
    return films;
  };

  useEffect(() => {
    setVisibleMovies(moviesInfo.filter((movie) => movie.name.includes(search)));
  }, [search]);

  return (
    <>
      <input
        type="text"
        name="search"
        placeholder="Search.."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      ></input>

      <div className="row"> {mapping(visibleMovies)} </div>
    </>
  );
};

export default Movies;
