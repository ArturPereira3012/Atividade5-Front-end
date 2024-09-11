import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FocusBlurExample from './components/FocusBlur'
import EventS from './components/Event'
import  UseComponent  from './components/UseComponent'


function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className='App'>
        <FocusBlurExample/>
        <EventS/>
        <UseComponent/>
    
      </div>

   
  )
}

export default App
