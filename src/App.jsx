import './App.css'
import { useState } from 'react'
import { NavBar } from './components/navbar/Navbar'
import { Hero } from './components/hero/Hero'

function App() {
  

  return (
    <>
      <section id="center">
        <div>
          <NavBar/>
        </div>
      </section>
      <div>
        <Hero/>
      </div>
      <section className="spacer"></section>
    </>
  )
}

export default App
