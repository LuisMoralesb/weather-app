import { Map, Marker } from "pigeon-maps";

const WeatherMap = (props) => {

    const { latitude, longitude, weatherData } = props

    return (
        <>
            {weatherData && (
                <div className='mapcontainer'>
                    <div className="map">
                        <Map center={[latitude, longitude]} zoom={12}>
                            <Marker width={40} anchor={[latitude, longitude]} />
                        </Map>
                    </div>
                </div>
            )}
        </>
    )
}

export default WeatherMap