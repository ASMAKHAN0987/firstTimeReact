import React, { useEffect, useState } from 'react'

const weather = ({ temp, humidity, pressure, speed, country, sunset, name, weatherMood, getWeatherInfo, getTemp, setGetTemp }) => {
    const [weatherState, setWeatherState] = useState("");
    useEffect(() => {
        if (weatherMood) {
            switch (weatherMood) {
                case "Clouds":
                    setWeatherState("wi-day-cloudy");
                    break;
                case "Haze":
                    setWeatherState("wi-day-fog");
                    break;
                case "Clear":
                    setWeatherState("wi-day-sunny");
                    break;
                case "Mist":
                    setWeatherState("wi-dust");
                    break;
                default:
                    setWeatherState("wi-day-sunny");
                    break;
            }
        }
    }, [weatherMood])
    const sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;
    console.log("this is my time", timeStr);
    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search" placeholder='search...' id="search" className='searchTerm' value={getTemp} onChange={(event) => setGetTemp(event.target.value)} />
                    <button className='searchButton' type='button' onClick={getWeatherInfo}>
                        Search
                    </button>
                </div>
            </div>
            <article className='widget'>
                <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">{weatherMood}</div>
                        <div className="place">
                            {name},{country}
                        </div>
                    </div>
                </div>
                <div className="date">{new Date().toLocaleString()}</div>
                {/* four coloumn section */}
                <div className='extra-temp'>
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p><i className={"wi wi-sunset"}></i></p>
                            <p className="extra-info-leftside">{timeStr} <br /> sunset</p>
                        </div>
                        <div className="two-sided-section">
                            <p><i className={"wi wi-rain"}></i></p>
                            <p className="extra-info-leftside">{humidity}<br /> Humidity</p>
                        </div>
                    </div>
                    {/* extra info */}
                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p><i className={"wi wi-humidity"}></i></p>
                            <p className="extra-info-leftside">{speed} <br /> speed</p>
                        </div>
                        <div className="two-sided-section">
                            <p><i className={"wi wi-humidity"}></i></p>
                            <p className="extra-info-leftside">{pressure} <br /> pressure</p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default weather