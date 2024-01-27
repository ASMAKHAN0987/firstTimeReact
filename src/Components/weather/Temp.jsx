import React, { useState,useEffect } from 'react'
import Weather from './weather'
import "./Style.css";
const Temp = () => {
    const [getTemp,setGetTemp] = useState("karachi");
    const [tempInfo,setTempInfo] = useState("");
    const [errors,setError] = useState("");
    const errorof = "";
    let responseData = ""; 

    const getWeatherInfo = async()=>{
       try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${getTemp}&units=metric&appid=698bc527cb27e7ea0b84529954d27057`;
        const response = await fetch(url);
        let responseData = await response.json();
        if(responseData.code!=200){
             setError(responseData.message);
        }
       const {temp,humidity,pressure} = responseData.main;
       const {main:weatherMood} = responseData.weather[0];
       const {name} = responseData;
       const {speed} = responseData.wind;
       const {country,sunset} = responseData.sys;
       console.log(temp);
       const myNewWeatherInfo = {
        temp,humidity,pressure,speed,country,sunset,name,weatherMood
       }
       setTempInfo(myNewWeatherInfo);
        } catch (error) {
            if(errors){
                alert(errors);
            }
           console.log(error);
       }
    }
    useEffect(()=>{
        getWeatherInfo();
    },[])
    return (
        <>
        <Weather {...tempInfo} getWeatherInfo={getWeatherInfo} getTemp={getTemp} setGetTemp={setGetTemp}/>
        </>
    )
}

export default Temp