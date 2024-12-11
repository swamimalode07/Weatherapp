import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css"
import { useState } from 'react';

export default function Searchbox({updateInfo}){
   

    let[city,setCity]=useState("");
    let[error,seterror]=useState(false);
    let APIURL="https://api.openweathermap.org/data/2.5/weather";
    const APIKEY="01da12890ff644a56c822253fb0518e6";

  

    let getWeatherinfo=async()=>{
        try{
            let response =await fetch(`${APIURL}?q=${city}&appid=${APIKEY}&units=metric`);
       
        let jsonresponse= await response.json();
        let result={
                city:city,
                temp: jsonresponse.main.temp,
                tempMin: jsonresponse.main.temp_min,
                tempMax: jsonresponse.main.temp_max,
                humidity: jsonresponse.main.humidity,
                feelslike:jsonresponse.main.feels_like,
                weather:jsonresponse.weather[0].description,
        }
        console.log(result)
        return result;
    }catch(err){
        throw err;
    }
}
        

   
    let handlechange=(event)=>{
        setCity(event.target.value)
    }
    let handleSubmit= async(event)=>{
        try{
            event.preventDefault();
        console.log(city);
        setCity("")
        let newInfo=await getWeatherinfo();
        updateInfo(newInfo)
        }
        catch(err){
                seterror(true)
        }
    }

    return(
        <div>
            
            <form action="" onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="City name" variant="outlined" required value={city} onChange={handlechange}/>
            <br/><br/>
            <Button variant="contained" endIcon={<SendIcon />} type="submit" >Search</Button>
            {error && <p style={{color:"red"}}>No such place exists</p>}
            </form>

        </div>
    )
}