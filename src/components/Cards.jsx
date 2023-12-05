import useOpenWeather from "../hooks/useOpenWeather"
import  '../styles/styles.css'

const Cards = (props) => {
    const { titleCard, data, src, weatherData } = props
    return (
        <div className="card">
            {weatherData && (
                <div>
                    <p className="spanCard"> {titleCard}</p>
                    <p className="data"> {data}</p>
                    <img className="img" src={src} alt='system icon'/>
                </div>
            )}
        </div>
    )
}

export default Cards