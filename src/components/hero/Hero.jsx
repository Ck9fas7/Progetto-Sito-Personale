import { Button } from "../Button"
import { Box } from "./box/Box"
import './hero.css'

export function Hero (){

    return (
        <div className="hero">
            <div className="hero-text">
                <h1>Diamo forma alle tue <span>idee.</span></h1>
                <p>Sviluppo siti web moderni, veloci e intuitivi, progettati per trasformare le tue idee in esperienze digitali.</p>
                <div className="hero-text-button">
                    <Button message={"Scrivimi"} href={"#contatti"}/>
                    <Button message={"Scopri di più"} href={"#howwork"} alt={{ '--bg': `transparent` }}/>
                </div>
            </div>
            <Box />
        </div>
    )
}