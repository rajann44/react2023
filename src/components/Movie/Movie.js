import { useEffect, useState } from "react";
import HorizontalDiv from "../comcomp/HorizontalDiv";

export default function Movie(){

    const[movieData, setMovieData] = useState([]);

    const movieDetail = async () => {
        let url = "https://api.themoviedb.org/3/movie/popular?api_key=cdfe2628c56c223437a074333cc33fbe";
        let data = await fetch(url);
        let parsedData = await data.json();
        setMovieData(parsedData.results);
    }

    //useEffect Currently DONOT HAVE ANY EFFECT ON CODE LOLLL
    
    useEffect(() => {
        // Remove below method call and add button click functionality
        movieDetail();
        if(movieData.length!==0){
            console.log(movieData)
        }
    }, [movieData])

    return(<div>
        {/* <div className="container my-3"><button type="button" className="btn btn-primary" onClick={movieDetail}>GET Movie Data</button></div> */}
        <HorizontalDiv title='Popular Movies'></HorizontalDiv>
        {movieData.length!==0 &&  <div className="row">
            {movieData.slice(0, 4).map((s) => (
            <div className="container col-md-3 d-flex justify-content-center my-3">
            <div className="card" key={s.backdrop_path} style={{ width: '18rem', maxWidth: '70%'}}>
                <img src={'https://image.tmdb.org/t/p/original'+s.poster_path} className="card-img-top img-thumbnail" alt="..."/>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{s.vote_average}</span>
                <div className="card-body">
                <h5 className="card-title">{s.original_title}</h5>
                <p className="card-text">{s.overview.substring(0, 50)}</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
        ))}
    </div>}
    </div>
    );
}