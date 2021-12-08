import { useState, useEffect, useRef } from "react";
import Transition from "react-transition-group/Transition";
import SearchForm from "./components/SearchForm";

import Weather from "./components/Weather";

// const uyte = `api.openweathermap.org/data/2.5/weather?q=Boston&appid=155da7ad5355e7cf3b6b93017697eec2`;
// {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//     body: JSON.stringify(),
//   },
// }

// const gitAPI =
//   "https://gist.githubusercontent.com/cbmgit/852c2702d4342e7811c95f8ffc2f017f/raw/InsuranceCompanies.json";

// const urlTous =
//   "https://react-app-81b61-default-rtdb.europe-west1.firebasedatabase.app/tours.json";

const DATA = [
  {
    id: "nr4",
    name: "London",
    icon: "http://openweathermap.org/img/wn/04d@2x.png",
    main: {
      temp: 3.59,
      feels_like: 3.59,
      temp_min: 0.94,
      temp_max: 5.53,
      pressure: 1004,
    },
    weather: {
      id: 803,
      main: "Clouds",
      description: "broken clouds",
      icon: "04d",
    },

    wind: { speed: 0.45, deg: 100, gust: 1.79 },
  },
  {
    id: "n4",
    name: "Boston",
    icon: "http://openweathermap.org/img/wn/04d@2x.png",
    main: {
      temp: 10.59,
      feels_like: 3.59,
      temp_min: 0.94,
      temp_max: 5.53,
      pressure: 1004,
    },
    weather: {
      id: 803,
      main: "Clouds",
      description: "broken clouds",
      icon: "04d",
    },

    wind: { speed: 0.45, deg: 100, gust: 1.79 },
  },
];

function App() {
  const [inputCity, setInputCity] = useState();
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [loadedCityes, setLoadedCityes] = useState([]);
  const [sortedCountry, setSortedCountry] = useState([]);
  const [showBlock, setShowBlock] = useState(false);
  const searchInputRef = useRef();

  // const yur = [];

  // console.log(r);
  // const newObj = {
  //   name: testingObj.name[0],
  //   temp: testingObj.temp[0],
  // };
  // console.log(newObj);
  // yur.push(newObj)
  // console.log(yur);

  const KEY = "155da7ad5355e7cf3b6b93017697eec2";
  const openWeather = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity},uk&units=metric&appid=${KEY}`;
  const weather = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=${KEY}`;

  const inputChangeHandler = (e) => {
    e.preventDefault();
    // setIsLoaded(true);
    // const enteredSearchInput = searchInputRef.current.value;
    // setInputCity((prev) => {
    //   return (prev = enteredSearchInput);
    // });

    // try {
    //   fetch(
    //     `https://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=${KEY}`
    //   )
    //     .then((response) => response.json())
    //     .then((result) => {
    //       const updatedCountryes = [];
    //       for (let i = 0; i < result.list.length; i++) {
    //         // console.log(result.list[i].main.temp);

    //         const updCity = {
    //           name: result.list[i].name,
    //           id: result.list[i].id,
    //           temp: result.list[i].main.temp,
    //           weather: result.list[i].weather[0].main,
    //           icon: result.list[i].weather[0].icon,
    //           wind: result.list[i].wind.speed,
    //         };
    //         updatedCountryes.push(updCity);
    //       }
    //       console.log(updatedCountryes);
    //       setLoadedCityes(updatedCountryes);
    //     });
    // } catch (error) {
    //   setIsLoaded(false);
    //   setError(error);
    // }
    console.log(loadedCityes);

    // fetch(
    //   `https://api.openweathermap.org/data/2.5/weather?q=${enteredSearchInput},uk&units=metric&appid=${KEY}`
    // )
    //   .then((response) => response.json())
    //   .then(
    //     (result) => {
    //       console.log(result);
    //       // console.log(result.weather);
    //       // console.log(result.weather[0].icon);
    //       // console.log(result.weather.map((item) => item.icon));
    //       if (result.length === 0) {
    //         return;
    //       }
    //       const citiyes = [];
    //       const icon = result.weather[0].icon;
    //       console.log(icon);
    //       const city = {
    //         id: result.id,
    //         icon: icon,
    //         name: result.name,
    //         temp: result.main.temp,
    //         feelsLike: result.main.feels_like,
    //         minTemp: result.main.temp_min,
    //         maxTemp: result.main.temp_max,
    //         weather: result.weather[0].main,
    //         windSpeed: result.wind.speed,
    //       };

    //       citiyes.push(city);
    //       console.log(citiyes);
    //       setSortedCountry((prevCiti) => {
    //         return (prevCiti = citiyes);
    //       });
    //     },
    //     (error) => {
    //       setIsLoaded(true);
    //       setError(error);
    //     }
    //   );
  };

  useEffect(() => {
    setIsLoaded(true);

    try {
      fetch(
        `https://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=${KEY}`
      )
        .then((response) => response.json())
        .then((result) => {
          const updatedCountryes = [];
          for (let i = 0; i < result.list.length; i++) {
            // console.log(result.list[i].main.temp);

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
          console.log(updatedCountryes);
          setLoadedCityes(updatedCountryes);
        });
    } catch (error) {
      setIsLoaded(false);
      setError(error);
    }
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
                state === "entering"
                  ? "translateY(0)"
                  : "translateY(3.5rem)",
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
    console.log(value);
    const upd = loadedCityes.filter((city) => city.name === value);
    setSortedCountry(upd);
    setIsLoaded((prev) => {
      return (prev = true);
    });
    setTimeout(() => {
      setIsLoaded(false);
    }, 2000);
    console.log(upd);
  };

  return (
    <div>
      {/* <form onSubmit={inputChangeHandler}>
        <label>Search</label>
        <input type="text" minLength="4" ref={searchInputRef} />
        <button>go</button>
      </form> */}
      <Transition in={isLoaded} timeout={2000}>
        {(state) => (
          <div
            style={{
              margin: "0 auto",
              transition: "all 1s ease-in-out",
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

      {/*  <Transition unmountOnExit mountOnEnter in={isLoaded} timeout={2000} >{(state) => (<div ><Weather apiData={loadedCityes} /></div)}</Transition>*/}
      {content}

      {/* <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} {item.main.temp}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
