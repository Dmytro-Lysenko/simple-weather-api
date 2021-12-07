import axios from "axios";
import { useState, useEffect } from "react";
import Weather from "./components/Weather";

const KEY = "155da7ad5355e7cf3b6b93017697eec2";

const uyte = `api.openweathermap.org/data/2.5/weather?q=Boston&appid=155da7ad5355e7cf3b6b93017697eec2`;
// {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//     body: JSON.stringify(),
//   },
// }

const gitAPI =
  "https://gist.githubusercontent.com/cbmgit/852c2702d4342e7811c95f8ffc2f017f/raw/InsuranceCompanies.json";

const urlTous =
  "https://react-app-81b61-default-rtdb.europe-west1.firebasedatabase.app/tours.json";

const openWeather = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=${KEY}`;

const fetchApi = async () => {
  const api_call = await fetch(openWeather);
  console.log(api_call);
  const response = await api_call.json();
  console.log(response);
};

const DATA = {
  id: "nr4",
  city: "London",
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
};

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div>
      HEllo
      <Weather apiData={DATA} />
    </div>
  );
}

export default App;
