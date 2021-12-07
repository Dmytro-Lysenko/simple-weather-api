const Weather = ({ apiData }) => {
  return (
    <div>
      <section>
        <div>
          <img src={apiData.icon} alt={apiData.city} />
        </div>
        <h1>{apiData.city}</h1>
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
      </section>
    </div>
  );
};

export default Weather;
