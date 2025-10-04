import React from 'react'
import { WiCloud, WiDaySunny, WiRain } from 'react-icons/wi'

const WeatherCard = ({city,temp,description}) => {
    console.log(city)

    const getWeatherIcon = (description) => {
         if(description.includes('clear sky')){
            return <WiDaySunny className='text-yellow-500 text-5xl'/>
         } else if (description.includes('rain')){
            return <WiRain className='text-blue-500 text-5xl'/>
         }else if (description.includes('cloud')){
            return <WiCloud className='text-gray-500 text-5xl'/>
         } else {
            <WiDaySunny className='text-yellow-500 text-5xl'/>
         }
    }
  return (
    <div className='p-4 bg-white shadow rounded-lg flex items-center'>
        <div className='mr-5'>{getWeatherIcon(description)}</div>
        <div className='border-l-2 pl-5'>
            <h2 className='text-xl font-bold'>{city}</h2>
            <p className='text-gray-600 capitalize'>{description}</p>
            <p className='text-2xl font-bold'>{temp}°C</p>
        </div>
    </div>
  )
}

export default WeatherCard