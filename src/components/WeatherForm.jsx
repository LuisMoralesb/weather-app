import { useEffect, useState, useRef } from "react"
import toast, { Toaster } from 'react-hot-toast';
import useOpenWeather from "../hooks/useOpenWeather"
import TempCity from "./TempCity"
import Title from "./Title"
import Cards from "./Cards"
import NameCity from "./NameCity"
import Forecast from "./Forecast"
import WeatherMap from "./WeatherMap"


const WeatherForm = () => {

    const [city, setCity] = useState('Medellin')
    const { apiCall, weatherData, error } = useOpenWeather()
    const ref = useRef(null)
    const date = new Date().toLocaleString()

    const searchCity = () => {
        const cityValue = ref.current.value
        
        /* Validamos que la ciudad no este vacia */
        if (ref.current.value == ''){
            toast.error('Empty city')
            return false
        }
        setCity(cityValue)
        apiCall(cityValue)
        ref.current.value = ''
    }

    /* Use efect para cargar la ciudad de Medellin por defecto */
    useEffect(() => {
        apiCall(city)
    }, [])

    return (
        <div className="container">
            <Title title={'Weather App'} />
            <div className="search">
                <input
                    className="inputCity"
                    type="text"
                    placeholder="Enter city name"
                    ref={ref}
                    /* onBlur={(e) => setCity(e.target.value)} */
                />
                <button
                    onClick={searchCity}
                    className="button"
                >
                    Search
                </button>
                <Toaster />
            </div>

            {
                error
                    ?
                    <p className="error">{error}: {city}</p>
                    :
                    <>  
                        
                        <NameCity
                            city={city}
                            weatherData={weatherData}
                        />
                        {/* <h2 className="Today">{date}</h2> */}
                        <div className="weatherInfo">
                            <TempCity
                                titleCard={'Temperature'}
                                weatherData={weatherData}
                            />
                            <Cards
                                weatherData={weatherData}
                                titleCard={'Wind Speed'}
                                data={weatherData?.wind?.speed ? `${weatherData?.wind?.speed} m/s` : ""}
                                src={'https://cdn-icons-png.flaticon.com/512/4814/4814331.png'}
                            />
                            <Cards
                                weatherData={weatherData}
                                titleCard={'Humidity'}
                                data={weatherData?.main?.humidity ? `${weatherData?.main?.humidity} %` : ""}
                                src={'https://cdn-icons-png.flaticon.com/512/3262/3262966.png'}
                            />
                            <Cards
                                weatherData={weatherData}
                                titleCard={'Feels like'}
                                data={weatherData?.main?.feels_like ? `${weatherData?.main?.feels_like} °` : ""}
                                src={'https://www.svgrepo.com/show/89512/temperature.svg'}
                            />
                        </div>
                        <h2>MAP</h2>
                        <WeatherMap
                            latitude={weatherData?.coord?.lat}
                            longitude={weatherData?.coord?.lon}
                            weatherData={weatherData}
                        />
                        <h2>FORECAST 5 DAYS</h2>
                        <Forecast city={city} weatherData={weatherData} />
                    </>
            }
        </div>

    )
}

export default WeatherForm
