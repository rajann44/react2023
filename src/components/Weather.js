import { useState } from "react";

export default function Weather(props) {
  const [text, setText] = useState("");
  const [temp, setTemp] = useState(null);

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  async function calculateWeather(location) {
    let openStreetMap = `https://nominatim.openstreetmap.org/search?q=${location}&limit=1&format=json`;
    let dataWithLatLon = await fetch(openStreetMap);
    let parsedData = await dataWithLatLon.json();
    let latitude = await parsedData[0].lat;
    let longitude = await parsedData[0].lon;
    let openMeteo = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
    let dataWithTemp = await fetch(openMeteo);
    let parsedData2 = await dataWithTemp.json();
    setTemp(parsedData2.current_weather);
  }

  function handleOnClick() {
    calculateWeather(text);
  }

  return (
    <div className="container my-3">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Sirsa_road.jpg"
          className="sirsa-image"
          alt="sirsa city"
        />
        <div className="card-body">
          <h4 className="card-title">{props.city} Weather</h4>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Location"
              aria-label="Location"
              aria-describedby="button-addon2"
              value={text}
              onChange={handleOnChange}
            />
            <button
              className="btn btn-outline-secondary"
              onClick={() => handleOnClick()}
              type="button"
              id="button-addon2"
            >
              Weather?
            </button>
          </div>
          <p className="card-text">
            Current Temprature: {temp !== null && temp.temperature}
          </p>
          <p className="card-text">
            Today's Date: {temp !== null && temp.time}
          </p>
        </div>
      </div>
    </div>
  );
}
