import SearchBox from "./SearchBox.jsx"
import InfoBox from "./InfoBox.jsx"
import {useState} from "react"

export default function WeatherApp(){
    let [weatherinfo,setWeatherInfo]=useState({
        city:"Mumbai",
        feels_like:28.8,
        humidity:65,
        maxTemp:27.23,
        minTemp:26.73,
        temp:27.23,
        weather:"mist",
    });
    let updateinfo=(newinfo)=>{
        setWeatherInfo(newinfo);
    }
    return(
        <div>
            <h2>Weather App by Delta</h2>
            <SearchBox updateinfo={updateinfo}/>
            <InfoBox info={weatherinfo}/>
        </div>
    );
}