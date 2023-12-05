import { useState } from "react"

const useForecast = () => {
    const [forecast, setForecast] = useState(null)
    const apiKey = import.meta.env.VITE_API_KEY_WEATHER

    const apiCallForecast = (city) => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(json => {
                setForecast(json)
                /* console.log(json) */
            })
            .catch(error => {
                console.log(error)
            })
    }

    return {forecast, apiCallForecast}
}


export default useForecast