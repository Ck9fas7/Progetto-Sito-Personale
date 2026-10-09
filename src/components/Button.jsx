import React,{useState}  from "react";
import { Immage } from "./Immage";

export function Button({message, img, onClick}){
    return (
        <>
            {
                message ?
                <div className="cta-btn"><a href="#contatti">{message}</a></div>
                :
                <button className="imageContainer" onClick={onClick}><Immage img={img}/></button>
            }
        </>
    )
}