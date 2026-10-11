import React,{useEffect, useState}  from "react";
import nightLogo from '../assets/moon.svg'
import lightLogo from '../assets/sun.svg'
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
        <Button onClick={()=>{setIsLight(!isLight)}} img={isLight ? nightLogo : lightLogo }/>
        </>
    )
} 