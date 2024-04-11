
import './App.css'
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons'
import Inputs from './components/Inputs'
import TimeAndLocation from './components/TimeAndLocation'
import TempuratureAndDetails from './components/TempuratureAndDetails'
import Forecast from './components/Forecast'

function App() {


  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
      <TopButtons />
      <Inputs />

      <TimeAndLocation />
      <TempuratureAndDetails />
      <Forecast title='hourly Forecast' />
      <Forecast title='Daily Forecast' />
    </div>
  )
}

export default App
