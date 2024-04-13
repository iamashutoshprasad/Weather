import React, { useState } from 'react';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';
//import { toast } from 'react-toastify';
import { getCurrentWeatherData, getForecastData } from '../services/weatherService';

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState('');

  const handleSearchClick = () => {
    if (city !== '') setQuery(city);
    
  };

  

     

  return (
    <div className='flex flex-row justify-center my-6'>
      <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type='text'
          placeholder='Search for city....'
          className='text-xl font-light p-2 w-full shadow-xl focus:outline-none lowercase rounded'
        />
        <UilSearch size={32} className='text-white cursor-pointer transition ease-out hover:scale-125' onClick={handleSearchClick} />
        {/* <UilLocationPoint size={32} className='text-white cursor-pointer transition ease-out hover:scale-125' onClick={getLocation} /> */}
      </div>
      <div className='flex flex-row w-1/4 items-center justify-center'>
        <button name='metric' className='text-xl text-white font-light transition ease-out hover:scale-125' onClick={() => setUnits('metric')}>
          °C
        </button>
        <p className='text-xl text-white font-light mx-1'> | </p>
        <button name='imperial' className='text-xl text-white font-light transition ease-out hover:scale-125' onClick={() => setUnits('imperial')}>
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
