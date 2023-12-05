import { useState } from "react";

const useOpenWeather = () => {

    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setloading] = useState(true)
    const apiKey = import.meta.env.VITE_API_KEY_WEATHER


    const apiCall = (city) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(json => {
                /* validacion cuando el cod sea 404 city no found */
                if(json.cod === '404'){
                    setError(json.message)
                    return false;
                }
                setloading(false)
                setError(null)
                setWeatherData(json)
            })
            .catch(error => {
                setError(error)
            })
    }

    return {weatherData, error, loading, apiCall}
}

export default useOpenWeather