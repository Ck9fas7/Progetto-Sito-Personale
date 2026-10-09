import { LightButton } from "./LightButton";
import { Button } from "./Button";
import { useScrolled } from "./useScrolled";
import React, { useState, useRef } from 'react';
import {Burger} from "./Burger";
import {Menu} from "./Menu";



export function HamburgerMenu(){
    const scrolled = useScrolled();
    const [open, setOpen] = useState(false);
    const node = useRef();
    return (
        <>
        <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
            <div className="navbar-inner">
                <b>Davide Ciaramdiaro</b>
                <div  className="navbar-actions">
                    <LightButton/>
                <div ref={node}>
                    <Burger open={open} setOpen={setOpen} />
                </div>
                </div> 
            </div>    
          </header>
          <Menu open={open} setOpen={setOpen} />
          </>
    )
}