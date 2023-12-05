import WeatherForm from "./WeatherForm"
import useOpenWeather from "../hooks/useOpenWeather"

const NameCity = (props) => {

    const { city, weatherData } = props

    return (
        <div className="nameCity">
        { weatherData && (
            <h2>
                WEATHER IN: {city.toUpperCase()}
            </h2>
        )}
        </div>
    
  )
}

export default NameCity