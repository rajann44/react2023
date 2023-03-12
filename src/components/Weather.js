import { useState, useEffect } from 'react'

function Weather(props){

    const [weather_news, setWeather_news] = useState(null);
    const [text, setText] = useState('');

    const [latitude, setLatitude] = useState('29.583333');
    const [longitude, setLongitude] = useState('75.083333');

    const [loglat, setLoglat] = useState([]);
    

    useEffect(() => {
      console.log(text);
      loglat.map((element)=> {
        setLatitude(element.lat);
        setLongitude(element.lon);
      })
    });

    const handleOnChange = (event) => {
      setText(event.target.value)
    }

    const getLongLat = async () => {
      var response = await fetch(`https://nominatim.openstreetmap.org/search?q=${text}&limit=1&format=json`);
      var jsonData = await response.json();
      setLoglat(jsonData);

      var response2 = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
      var jsonData2 = await response2.json();
      setWeather_news(jsonData2)
    }


      return (
        <div className='container my-3'>
          <div className="card" style={{width: "18rem"}}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Sirsa_road.jpg" className="sirsa-image" alt="sirsa city"/>
          <div className="card-body">
          <h4 className="card-title">{props.city} Weather</h4>
          
          <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Enter Location" aria-label="Location" aria-describedby="button-addon2" value={text} onChange={handleOnChange}/>
          <button className="btn btn-outline-secondary" onClick={getLongLat} type="button" id="button-addon2">Weather?</button>
          </div>
          <p className="card-text">Current Temprature: {weather_news !== null && weather_news.current_weather.temperature}</p>
          <p className="card-text">Today's Date: {weather_news !== null && weather_news.current_weather.time}</p>
          </div>
          </div>
        </div>
    );

}

export default Weather;