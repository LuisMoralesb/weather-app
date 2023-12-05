import WeatherForm from "./WeatherForm"
import useOpenWeather from "../hooks/useOpenWeather"

const Humedity = (props) => {
    const { titleCard, data, src } =  props
  return (
    <div className="card">
            {data && (
                <div>
                    <span> {titleCard}</span>
                    <p> {data}</p>
                    <img className="img" src={src} alt='system icon'/>
                </div>
            )}
        </div>
  )
}

export default Humedity