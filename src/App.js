import { useState, useEffect } from "react";
import Transition from "react-transition-group/Transition";
import SearchForm from "./components/SearchForm";

import Weather from "./components/Weather";

function App() {
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadedCityes, setLoadedCityes] = useState([]);
  const [sortedCountry, setSortedCountry] = useState([]);

  const KEY = "155da7ad5355e7cf3b6b93017697eec2";

  // const city = `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${KEY}`;

  const fetchData = (cities) => {
    try {
      fetch(
        `https://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=${KEY}`
      )
        .then((response) => response.json())
        .then((result) => {
          const updatedCountryes = [];
          for (let i = 0; i < result.list.length; i++) {
            const updCity = {
              name: result.list[i].name,
              id: result.list[i].id,
              temp: result.list[i].main.temp,
              weather: result.list[i].weather[0].main,
              icon: result.list[i].weather[0].icon,
              wind: result.list[i].wind.speed,
            };
            updatedCountryes.push(updCity);
          }
          setLoadedCityes(updatedCountryes);
        });
    } catch (error) {
      setIsLoaded(false);
      setError(error);
    }
  };

  useEffect(() => {
    setIsLoaded(true);
    fetchData();
  }, []);

  if (error) {
    return <div>Erorr: {error.message}</div>;
  }

  let content;
  if (sortedCountry.length === 0) {
    content = (
      <Transition in={isLoaded} timeout={2000}>
        {(state) => (
          <div
            style={{
              margin: "0 auto",
              transition: "all 1s ease-out",
              transform:
                state === "entering" ? "translateY(0)" : "translateY(3.5rem)",
            }}
          >
            <Weather apiData={loadedCityes} />;
          </div>
        )}
      </Transition>
    );
  }
  if (sortedCountry.length > 0) {
    content = <Weather apiData={sortedCountry} />;
  }

  const inputHandler = (value) => {
    const upd = loadedCityes.filter((city) => city.name === value);
    setSortedCountry(upd);
    setIsLoaded((prev) => {
      return (prev = true);
    });
    setTimeout(() => {
      setIsLoaded(false);
    }, 2000);
  };

  return (
    <div>
      <Transition in={isLoaded} timeout={2000}>
        {(state) => (
          <div
            style={{
              margin: "0 auto",
              transition: "all 1s ease-in",
              transform:
                state === "entering"
                  ? "translateY(0.5rem)"
                  : "translateY(1.5rem)",
            }}
          >
            <SearchForm InputClick={inputHandler} />
          </div>
        )}
      </Transition>
      {content}
    </div>
  );
}

export default App;
