import useForecast from "../hooks/useForecast";
import { ForecastCards } from "./ForecastCards";
import { useEffect } from "react";

const arrayForecards = [5, 13, 21, 29, 37]

const Forecast = (props) => {
    const { forecast, apiCallForecast } = useForecast()
    const { city, weatherData } = props

    /* Use effect para ejecutar el forecast despues del weatherData */
    useEffect(() => {
        if (city) {
            apiCallForecast(city)
        }
    }, [weatherData])

    return (
        <div className="forecastInfo">
            {arrayForecards.map((item) => {
                const list = forecast?.list[item]
                return <ForecastCards
                    key={item}
                    weatherData={weatherData}
                    titleCard={'Temperature'}
                    date={list?.dt_txt}
                    temp={list?.main?.temp}
                    icon={list?.weather[0].icon}
                />
            }
            )}
        </div>
    )
}

export default Forecast