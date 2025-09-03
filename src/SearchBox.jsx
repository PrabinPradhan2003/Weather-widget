import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { use, useState } from "react";

export default function SearchBox({ updateWeather }) {
    let [city, setCity] = useState("");
    let [weather, setWeather] = useState(null);
    let [error, setError] = useState("");
    const GEO_API = "https://geocoding-api.open-meteo.com/v1/search?name=";
    const WEATHER_API = "https://api.open-meteo.com/v1/forecast";

    let handleChange = (event) => {
        setCity(event.target.value);
    };



    let getWeatherInfo = async () => {
        try {
            //get lonitude and latitude
            const geoRes = await fetch(`${GEO_API}${city}&count=1`);
            const geoData = await geoRes.json();

            if (!geoData.results || geoData.results.length === 0) {
                setError("City not found");
                return;
            }

            const { longitude, latitude, name, country } = geoData.results[0];

            //get weather
            const weatherInfo = await fetch(`${WEATHER_API}?latitude=${latitude}&longitude=${longitude}&current_weather=true`);

            const weatherData = await weatherInfo.json();

            if (!weatherData.current_weather) {
                setError("Weather data not available");
                return;
            }


            const newWeather = {
                city: name,
                country,
                temp: weatherData.current_weather.temperature,
                wind: weatherData.current_weather.windspeed,
                code: weatherData.current_weather.weathercode,
            };

            setWeather(newWeather);
            updateWeather(newWeather);
        } catch (err) {
            setError("Something went wrong");
        }
    }



    let handleSubmit = async (event) => {
        event.preventDefault();
        getWeatherInfo();
        setCity("");
    }


    return (
        <div className="SearchBox">

            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City name"
                    variant="outlined"
                    value={city}
                    onChange={handleChange}
                    required
                />
                <br></br>
                <br></br>
                <Button variant="contained" type="submit">
                    Send
                </Button>

                {error && <h2 style={{ color: "red" }}>{error}</h2>}
            </form>
        </div>
    );
}
