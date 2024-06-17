import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../style/SearchBox.css";
import { useState } from "react";


export default function SearchBox({updateinfo}) {
    let[city,setCity] = useState("");
    let[error, setError] = useState(false);


    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "3f7a4dfedfd73f0026b8c1671eea9a09";
   
     let  getweather = async()=>{
      try{
        let responce =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let Jsonresponce = await responce.json();
        let result = {
          city:city,
          temp: Jsonresponce.main.temp,
          tempMax: Jsonresponce.main.temp_max,
          tempMin: Jsonresponce.main.temp_min,
          humidity: Jsonresponce.main.humidity,
          feelslike: Jsonresponce.main.feels_like,
          weather_des: Jsonresponce.weather[0].description,
        }
        // console.log(result);
        return result;
      }catch(err){
        throw err;
        
      }
         
     }

    let handleInput = (event) =>{
        // console.log(event.target.value);
        setCity(event.target.value);
    }
    let handleSubmit = async (event) =>{
      try{
        event.preventDefault();
        setCity("")
        getweather();
        // console.log(city);
        let data = await getweather();
        updateinfo(data);
      }catch(err){
          setError(true);
      }
       
    }

  return (
    <>
      <div className="SearchBox">
        <form onSubmit={handleSubmit}>
          <TextField id="city" label="City Name" variant="outlined" value={city}  onChange={handleInput} required/>
          <br />
          <br /> 
          <Button type="submit"  variant="contained" size="large">
            Search
          </Button>
          {error && <p>No, such place exits!</p>}
        </form>
      </div>
    </>
  );
}
