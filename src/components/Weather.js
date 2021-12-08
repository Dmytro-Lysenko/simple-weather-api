import classes from './Weather.module.css'

const Weather = ({ apiData }) => {
  return (
    <div className={classes.container}>
      {apiData.map((city) => (
        <section className={classes.card} key={city.id}>
          <div className={classes.image}>
            <img
              src={`http://openweathermap.org/img/wn/${city.icon}@2x.png`}
              alt={city.name}
            />
          </div>
          <h1>{city.name}</h1>
          <div>
            <h1>Temperature is : {city.temp}</h1>
          </div>
          <h1>
            <span>Weather is : {city.weather}</span>
            <span>Wind speed is : {city.wind} ms</span>
          </h1>
          {/* <h2>Wind speed: {city.windSpeed} m/s</h2> */}
        </section>
      ))}
      {/* <section>
        <div>
          <img src={apiData.icon} alt={apiData.name} />
        </div>
        <h1>{apiData.name}</h1>
        <div>
          <h1>{apiData.main.temp}</h1>
          <h2>
            <span>Temp min: {apiData.main.temp_min}</span>
            <span>Temp max: {apiData.main.temp_max}</span>
            <span>Feels like: {apiData.main.feels_like}</span>
          </h2>
        </div>
        <h1>
          <span>Weather is: {apiData.weather.main} description: </span>
          <span> {apiData.weather.description}</span>
        </h1>
        <h2>Wind speed: {apiData.wind.speed} m/s</h2>
      </section> */}
    </div>
  );
};

export default Weather;
