import React from 'react'
import { UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilWind, UilSun, UilSunset, } from '@iconscout/react-unicons'
function TempuratureAndDetails() {
    return (
        <div>
            <div className=' flex items-center justify-center py-6 text-xl text-cyan-300'>
                <p> Cloudy </p>
            </div>
            <div className='flex flex-row items-center justify-between text-white py-3'>
                <img src='https://cdn-icons-png.flaticon.com/512/169/169367.png' className='w-20 ' />
                <p className='text-5xl'> 34°</p>
                <div className='flex flex-col  space-y-2'>
                    <div className='flex font-light text-sm items-center justify-center'> <UilTemperature size={16} className="mr-1" /> Real fell:
                        <span className='font-medium ml-1'> 34°</span>
                    </div>
                    <div className='flex font-light text-sm items-center justify-center'> <UilTear size={16} className="mr-1" />Humidity:
                        <span className='font-medium ml-1'> 65%</span>
                    </div>
                    <div className='flex font-light text-sm items-center justify-center'> <UilWind size={16} className="mr-1" />Wind:
                        <span className='font-medium ml-1'> 11km/h</span>
                    </div>
                    
                   

                </div>

            </div>
        </div>
    )
}

export default TempuratureAndDetails
