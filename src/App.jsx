import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Button } from './components/Button'
import { LightButton } from './components/LightButton'
import { NavBar } from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div>
          <NavBar/>
        </div>
      </section>
      <section id="spacer"></section>
    </>
  )
}

export default App
