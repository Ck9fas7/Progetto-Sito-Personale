import { LightButton } from "../LightButton";
import { useScrolled } from "../utilis/useScrolled";
import { Button } from "../Button";

export function FullMenu(){
    const scrolled = useScrolled();
    return (  <>
        <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
            <div className="navbar-inner">
                <b>Davide Ciaramdiaro</b>
                <div className="navbar-pill">
                    <a href="#servizi">Servizi</a>
                    <a href="#howwork">Come Lavoro</a>
                    <a href="#works">Portfolio</a>
                    <a href="#price">Pacchetti</a>
                </div>
                <div className="navbar-actions">
                    <Button message="Scrivimi" href={"#contatti"}/>
                    <LightButton/>
                </div>
            </div>    
          </header>
          </>
    )
}
