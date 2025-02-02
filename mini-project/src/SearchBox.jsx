import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import "./SearchBox.css";
import {useState} from "react";
import { red } from '@mui/material/colors';

export default function SearchBox({updateinfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    let API_URL="https://api.openweathermap.org/data/2.5/weather";
    let API_KEY="cd103f84b1e908414b84fb4d32b31039";

    let getweatherinfo = async()=>{
        try{
        let res= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonres= await res.json();
        console.log(jsonres);
        let result={
            city:city,
            temp:jsonres.main.temp,
            feels_like:jsonres.main.feels_like,
            minTemp:jsonres.main.temp_min,
            maxTemp:jsonres.main.temp_max,
            humidity:jsonres.main.humidity,
            weather:jsonres.weather[0].description,

        }
        console.log(result);
        return result;
       }catch(err){
        throw err;
       }

    }
    let handlechange=(event)=>{
        setCity(event.target.value);
    }
    let submithandle= async(event)=>{
        try{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newinfo= await getweatherinfo();
        updateinfo(newinfo);
        }catch(err){
            setError(true);
        }
    }
    return(
    <div className="SearchBox">
        <form onSubmit={submithandle}>
        <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handlechange}/><br></br><br></br>
        <Button variant="contained" type="submit">Submit</Button>
        </form>
        {error&&<p style={{color:"red"}}>No Such Place exists!</p>}
    </div>
    );
}