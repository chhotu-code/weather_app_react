import SearchBox from "../components/SearchBox";
import InfoBox from "../components/InfoBox"
import { useState } from "react";
export default function WeatherApp(){
    let[weather,setWeather] = useState({
        city: "Delhi",
        temp: 24.05,
        tempMin: 23.3,
        tempMax: 30.5,
        humidity: 50,
        feelslike: 45,
        weather_des: "Hzar",
      }
    );
    let updateinfo = (newWeather)=>{
        setWeather(newWeather);
    }
    return(
        <>
          <h1 style={{textAlign:"center"}}>Weather Information</h1>
          <SearchBox updateinfo={updateinfo}/>
          <InfoBox info={weather}/>
        </>
    );
}