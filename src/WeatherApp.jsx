import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"
import { useState } from "react"

export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Berhampur",
        temp: 30
    });

    let updatedData = (result)=>{
        console.log(result);
        setWeatherInfo(result);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather-widget</h2>
            <SearchBox updateWeather={updatedData} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}