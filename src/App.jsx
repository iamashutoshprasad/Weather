import './App.css'
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons'
import Inputs from './components/Inputs'
import TimeAndLocation from './components/TimeAndLocation'
import TempuratureAndDetails from './components/TempuratureAndDetails'
import Forecast from './components/Forecast'
import { getCurrentWeatherData, getForecastData } from './services/weatherService' // Update import
import { useEffect, useState } from 'react'

function App() {
  const [query, setQuery] = useState({ q: 'lucknow' })
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const currentWeather = await getCurrentWeatherData(query); // Fetch current weather data
      const forecastWeather = await getForecastData(query); // Fetch forecast data

      // Combine current weather and forecast data
      const formattedWeather = { ...currentWeather, forecast: forecastWeather };

      setWeather(formattedWeather);
    }

    fetchData();
  }, [query, units]);

  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
      <TopButtons />
      <Inputs />
      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TempuratureAndDetails weather={weather} />
          {/* Render forecast component with weather forecast data */}
          {weather.forecast && (
            <>
              {/* Pass hourly forecast data to Forecast component */}
              {/* <Forecast title='Hourly Forecast' data={weather.forecast.hourly} /> */}
              <Forecast title='Daily Forecast' data={weather.forecast.daily} />
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default App
