import { Button } from "../Button"
import { Box } from "./box/Box"
import './hero.css'

export function Hero (){

    return (
        <div className="hero">
            <div className="hero-text">
                <h1>Frase <span>Catchy</span> per il tuo progetto</h1>
                <p>Presentazione</p>
                <div className="hero-text-button">
                    <Button message={"Scrivimi"} href={"#contatti"}/>
                    <Button message={"Scopri di più"} href={"#contatti"} alt={{ '--bg': `transparent` }}/>
                </div>
            </div>
            <Box />
        </div>
    )
}