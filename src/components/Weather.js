import { useState } from 'react'

function Weather(props){

    const [weather_news, setWeather_news] = useState(null);

    const getWeatherNews = async () => {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=29.53&longitude=75.03&current_weather=true');
        var jsonData = await response.json();
        setWeather_news(jsonData)
        console.log(weather_news.elevation)
      };


      return (
        <div className='container my-3'>
          <div className="card" style={{width: "18rem"}}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Sirsa_road.jpg" className="sirsa-image" alt="sirsa city"/>
          <div className="card-body">
          <h4 className="card-title">{props.city} Weather</h4>
          <p className="card-text">Current Temprature: {weather_news !== null && weather_news.current_weather.temperature}</p>
          <p className="card-text">Today's Date: {weather_news !== null && weather_news.current_weather.time}</p>
          <button className="btn btn-success" onClick={getWeatherNews} type="button">Go Weather Info</button>
          </div>
          </div>
        </div>
    );

}

export default Weather;