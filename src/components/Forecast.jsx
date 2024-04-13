import React, { useState, useEffect } from "react";
import { getForecastData, iconUrlFromCode } from "../services/weatherService";

function Forecast({ title ,items,units}) {
  const [forecastData, setForecastData] = useState();

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const data = await getForecastData(title, units);
        setForecastData(data);
        console.log(data);
      } catch (error) {
        console.log("Error fetching forecast data:", error);
      }
    };
    

    fetchForecastData();
  }, [title]); // Include title in dependency array

  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />

      <div className="flex flex-row items-center justify-between text-white">
        
        {
        forecastData &&
          forecastData.daily && 
          forecastData.daily.map((item, index) => (
            
            <div key={index} className="flex flex-col items-center justify-center">
              <p className="font-light text-sm">{item.title}</p>
              <img src={iconUrlFromCode(item.icon)} className="w-12 my-1" alt="" />
              <p className="font-medium">{`${item.temp.toFixed()}°`
              }
              </p>
              <>{console.log(forecastData.daily)}</>
            </div>
          ))}
          
      </div>
    </div>
  );
}

export default Forecast;
