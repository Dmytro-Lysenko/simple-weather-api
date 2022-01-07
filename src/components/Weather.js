import classes from "./Weather.module.css";

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
        </section>
      ))}
    </div>
  );
};

export default Weather;
