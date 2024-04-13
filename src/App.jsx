import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TempuratureAndDetails from './components/TempuratureAndDetails';
import Forecast from './components/Forecast';
import { getCurrentWeatherData, getForecastData } from './services/weatherService'; // Update import
import { useEffect, useState } from 'react';

function App() {
  const [query, setQuery] = useState('lucknow'); // Initialize with city name
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentWeather = await getCurrentWeatherData(query, units);
        const forecastWeather = await getForecastData(query, units);

        const formattedWeather = { ...currentWeather, forecast: forecastWeather };

        setWeather(formattedWeather);

      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [query, units]);
  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };

  return (
    <div
      className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
    >
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TempuratureAndDetails weather={weather} />
          {/* {weather.forecast && (
            <>
              <Forecast title='Daily Forecast' items= {weather.forecast} 
              />
         

            </>
          )} */}
        </div>
      )}
    </div>
  );
}

export default App;
