export const ForecastCards = (props) => {

  const { weatherData, titleCard, temp, icon, date } = props

  const formatDate = new Date(date).toLocaleDateString()

  return (
    <>
      {weatherData && (
        <div className="card">
          <p className="spanCard"> {titleCard}</p>
          <p className="data"> {temp} °</p>
          <img className="img" src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt='system icon' />
          <p className="date"> {formatDate}</p>
        </div>
      )}
    </>
  )
}
