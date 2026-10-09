import React,{useEffect, useState}  from "react";
import nightLogo from '../assets/dark-mode.png'
import lightLogo from '../assets/light-mode.png'
import { Immage } from "./Immage";
import { Button } from "./Button";

export function LightButton({}){
    const [isLight, setIsLight] = useState(true);

    useEffect(()=>{
        const root = document.documentElement;
        root.setAttribute("data-theme",isLight ? "" : "dark")
    })
    return (
        <>
        <Button onClick={()=>{setIsLight(!isLight)}} img={isLight ? lightLogo : nightLogo }/>
        </>
    )
} 