import React from 'react'

const Forecast = ({title}) => {
    return (
        <div>
            <div className='flex items-center justify-start mt-6'>
                <p className='text-white font-medium uppercase'>
                    {title}
                </p>
            </div>
            <hr className=' my-2' />
            <div className='flex flex-row items-center justify-between text-white'>
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm' >4:30 PM</p>
                    <img src='https://cdn-icons-png.flaticon.com/512/169/169367.png' className='w-8 my-1' />
                    <p> 22°</p>
                
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm' >4:30 PM</p>
                    <img src='https://cdn-icons-png.flaticon.com/512/169/169367.png' className='w-8 my-1' />
                    <p> 22°</p>
                
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm' >4:30 PM</p>
                    <img src='https://cdn-icons-png.flaticon.com/512/169/169367.png' className='w-8 my-1' />
                    <p> 22°</p>
                
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm' >4:30 PM</p>
                    <img src='https://cdn-icons-png.flaticon.com/512/169/169367.png' className='w-8 my-1' />
                    <p> 22°</p>
                
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm' >4:30 PM</p>
                    <img src='https://cdn-icons-png.flaticon.com/512/169/169367.png' className='w-8 my-1' />
                    <p> 22°</p>
                
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm' >4:30 PM</p>
                    <img src='https://cdn-icons-png.flaticon.com/512/169/169367.png' className='w-8 my-1' />
                    <p> 22°</p>
                
                </div>
            </div>

        </div>
    )
}

export default Forecast
