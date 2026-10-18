import './App.css'

import { NavBar } from './components/navbar/Navbar'
import { Hero } from './components/hero/Hero'
import { Card } from './components/card/Card'
import { Step } from './components/step/Step'
import { Separetor_animated } from './components/separetor/Separetor_animated'
import { Project } from './components/project/Project'
import { ImageMarq } from './components/separetor/Separetor_img'

function App() {
  const stepDict = {
    "Ci parliamo":"Prezzo fisso e tempi chiari, scritti nero su bianco.",
    "Costruisco il sito":"Vedi l'anteprima online mentre procedo e mi dici cosa cambiare.",
    "Pubblico e resto a disposizione":"Il sito va online e puoi contare su assistenza entro 24 ore.",
  }
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
        <div className='container borderdiv'>
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
      <section id="howwork">
        <div className="container">
          <div className='head-container'>
            <h2><b>Come lavoriamo insieme</b></h2>
            <p className="lead">Quattro passaggi, nessuna sorpresa.</p>
          </div>
          <Step Step={stepDict}/>
        </div>
      </section>
      
      <div className='separetor'>
        <Separetor_animated text={"Frase chatchy!  ."}/>
      </div>
      
      
      <section id="works">
        <div className='container'>
          <div className='head-container'>
            <h2><b>Portfolio</b></h2>
          </div>
          <div className='project-container'>
            <Project/>
          </div>
        </div>
      </section>

      <div className='separetor'>
        <ImageMarq/>
      </div>
    </>
  )
}

export default App
