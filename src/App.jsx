import './App.css'

import { NavBar } from './components/navbar/Navbar'
import { Hero } from './components/hero/Hero'
import { Card } from './components/card/Card'
import { Step } from './components/step/Step'
import { Separetor_animated } from './components/separetor/Separetor_animated'
import { Project } from './components/project/Project'
import { ImageMarq } from './components/separetor/Separetor_img'
import { Footer } from './components/Footer'

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
            <p>Quattro passaggi, nessuna sorpresa.</p>
          </div>
          <Step Step={stepDict}/>
        </div>
      </section>
      
      <div className='separetor'>
        <Separetor_animated text={"Diamo forma alle tue idee.      "}/>
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

      <section id="price">
        <div className="container">
          <div className='head-container'>
            <h2><b>Pacchetti</b></h2>
            <p>Prezzi indicativi, da contrattare.</p>
          </div>
          
          <div className="grid">
              <Card title="Vetrina" price="400 €" desc="Un sito adatto sia per smartphone che per PC,Fino a 5 pagine,Sito responsive,Domionio e hosting configurati,Blog o catalogo prodotti,3 mesi di assistenza inclusi,SEO di base" type={true}/>
              <Card title="Restyling" price="200 €" desc="Nuovo design con struttura e contenuti invariati,Migliorie SEO e performance, " type={true}/>
              <Card title="Modifiche" price="20 €" period="/h" desc="Cambio testi o immagini,Nuova pagina,Correzioni grafiche,Aggiornamento di prezzi e contatti" type={true}/>
              <Card title="Manutenzione" price="40 €" period="/mese" desc="Backup,Monitoraggio online del sito,Report mensile su visite e prestazioni," type={true}/>
              
        </div>
      </div>
    </section>

    
    <Footer/>
    </>
  )
}

export default App
