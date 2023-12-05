import useOpenWeather from "../hooks/useOpenWeather"
import  '../styles/styles.css'

const TempCity = (props) => {
    const { weatherData, titleCard } = props
    
    return (
        <>
            {weatherData && (
                <div className="card">
                    <p className="spanCard"> {titleCard}</p>
                    <p className="data">{weatherData?.main?.temp} °</p>
                    <img className="img" src={`https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png`} alt='system icon'/>
                </div>
            )}
        </>
    )
}

export default TempCity