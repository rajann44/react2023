import { useEffect, useState } from "react";

export default function SearchMovie(){

    const [searchMovieListObj, setSearchMovieListObj] = useState([]);
    const [inputBoxText, setInputBoxText] = useState([null]);

    let parsedData;

    const handleOnChange = (event) => {
        setInputBoxText(event.target.value)
    }

    const searchMovieList = async (query) => {
        let url = `https://api.themoviedb.org/3/search/movie?api_key=cdfe2628c56c223437a074333cc33fbe&language=en-US&page=1&include_adult=false&query=${query}`;
        let data = await fetch(url);
        parsedData = await data.json();
        console.log("IN MOVIE LIST");
        console.log(parsedData.results);
        setSearchMovieListObj(parsedData.results)
    }

    useEffect(() => {
        console.log('USE EFFECT CALLED')
    }, [searchMovieListObj])

    return(<>
        <div className="input-group mb-3 container my-3 w-50 p-3">
            <input type="text" className="form-control" placeholder="Search any movie here....." aria-label="movie-name" aria-describedby="basic-addon2" onChange={handleOnChange}/>
            <div className="input-group-append">
            <button className="btn btn-primary mx-2 rounded-0" type="button" onClick={() => searchMovieList(inputBoxText)}>Search</button>
            </div>
        </div>
        <div className="container col-md-8 d-flex justify-content-center">
            {searchMovieListObj.slice(0, 5).map((singleMovie) => (
                <div class="card" style={{ width: '18rem', margin: '10px'}}>
                <img src={singleMovie.poster_path?'https://image.tmdb.org/t/p/original'+singleMovie.poster_path:'https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg'} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5>{singleMovie.original_title}{' ['+singleMovie.release_date.substring(0, 4)+']'}</h5>
                <p class="card-text">{singleMovie.overview.substring(0, 50)}</p>
                </div>
            </div>
            ))}
        </div>
    </>);
}