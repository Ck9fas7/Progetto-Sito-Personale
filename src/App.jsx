import './App.css'
import { useState } from 'react'
import { NavBar } from './components/navbar/Navbar'
import { Hero } from './components/hero/Hero'
import { Card } from './components/card/Card'

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
      <section id="servizi">
        <div className='container'>
          <div className="head-container">
            <h2><b>Cosa posso fare per te</b></h2>
            <p>Dal primo sito al restyling di uno vecchio, fino alla cura quotidiana di tutto ciò che sta dietro.</p>
          </div>
          <div>
            <div className="grid">
              <Card title="Sito Nuovo" desc="progettato su misura, leggibile da telefono e pronto per comparire su qualsiasi Browser"/>
              <Card title="Restyling" desc="Il tuo sito attuale diventa più veloce, più moderno, più bello e più facile da usare."/>
              <Card title="Manutenzione" desc="Aggiornamenti, backup e controlli di sicurezza fatti al posto tuo, ogni mese quando vuoi."/>
              <Card title="Modifiche al volo" desc="Nuovo orario, nuovo prezzo, nuova foto; mi scrivi e lo trovi online in giornata."/>
            </div>
          </div>
        </div>
      </section>
      sep
    </>
  )
}

export default App
