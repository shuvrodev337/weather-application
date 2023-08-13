import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './Pages/Homepage/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='max-w-screen-xl mx-auto p-6'>
    <Homepage></Homepage>
    </div>
    </>
  )
}

export default App
