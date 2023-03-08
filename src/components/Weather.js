import { useState } from 'react'

function Weather(props){

    const [weather_news, setWeather_news] = useState(null);

    const getWeatherNews = async () => {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=29.53&longitude=75.03&hourly=temperature_2m&current_weather=true');
        var jsonData = await response.json();
        setWeather_news(jsonData)
        console.log(weather_news.elevation)
      };


      return (
        <div className='container my-3'>
          <div className="card" style={{width: "18rem"}}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Sirsa_road.jpg" className="sirsa-image" alt="sirsa city"/>
          <div className="card-body">
          <h5 className="card-title">{props.city} Weather</h5>
          <p className="card-text">Latitude: {weather_news !== null && weather_news.latitude}</p>
          <p className="card-text">Longitude: {weather_news !== null && weather_news.longitude}</p>
          <a className="btn btn-success" onClick={getWeatherNews} type="button">Go Weather Info</a>
          </div>
          </div>
        </div>
    );

}

export default Weather;