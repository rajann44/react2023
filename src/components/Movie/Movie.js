import { useEffect, useState } from "react";
import HorizontalDiv from "../comcomp/HorizontalDiv";
import SearchMovie from "./SearchMovie";

export default function Movie() {
  const [popularMovieData, setPopularMovieData] = useState([]);

  const popularMovieDetail = async () => {
    let url =
      "https://api.themoviedb.org/3/movie/popular?api_key=cdfe2628c56c223437a074333cc33fbe";
    let data = await fetch(url);
    let parsedData = await data.json();
    setPopularMovieData(parsedData.results);
  };

  //useEffect Currently DONOT HAVE ANY EFFECT ON CODE LOL
  useEffect(() => {
    popularMovieDetail();
  }, []);

  return (
    <div>
      <SearchMovie></SearchMovie>
      <HorizontalDiv title="Popular Movies"></HorizontalDiv>
      <div className="container my-3 d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={popularMovieDetail}
        >
          GET Movie Data
        </button>
      </div>
      {popularMovieData.length !== 0 && (
        <div className="row">
          {popularMovieData.slice(0, 4).map((singleMovie) => (
            <div
              className="container col-md-3 d-flex justify-content-center my-3"
              key={singleMovie.backdrop_path}
            >
              <div className="card" style={{ width: "18rem", maxWidth: "70%" }}>
                <img
                  src={
                    "https://image.tmdb.org/t/p/original" +
                    singleMovie.poster_path
                  }
                  className="card-img-top img-thumbnail"
                  alt="..."
                />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {singleMovie.vote_average}
                </span>
                <div className="card-body">
                  <h5 className="card-title">{singleMovie.original_title}</h5>
                  <p className="badge text-bg-warning">
                    {singleMovie.release_date}
                  </p>
                  <p className="card-text">
                    {singleMovie.overview.substring(0, 50)}
                  </p>
                  <a href="/" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
