import Searchbox from "./Searchbox" 
import InfoBox from "./InfoBox"
import { useState } from "react"
export default function Weatherapp(){
   
    const[weatherInfo,setweatherInfo]=useState({
       
    })
    let updateInfo=(newInfo)=>{
        try{
            setweatherInfo(newInfo)
        }
        catch(err){
            setError(true);
        }
    }
    return(
        <div  style={{textAlign:"center"}}>
           
            <h1>Weather app</h1>
            <Searchbox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}