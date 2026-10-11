import React,{useState}  from "react";
import { Immage } from "./Immage";

export function Button({message, img, href,alt,onClick}){
    return (
        <>
            {
                message ?
                    href ?
                        alt?
                        <div className="cta-btn" style={alt}><a href={href}>{message}</a></div>:
                        <div className="cta-btn"><a href={href}>{message}</a></div>:
                        <div className="cta-btn">{message}</div>
                :   
                    href ?
                    <button className="imageContainer" onClick={onClick} href={href}><Immage img={img}/></button>:
                    <button className="imageContainer" onClick={onClick}><Immage img={img}/></button>
                    
            }
        </>
    )
}