import { useState } from 'react';
import './colorpage.css';
export default function Colorgen(){
    const[Color,setColor]=useState(genrateit);
    function genrateit(){
        const r=("0"+Math.floor(Math.random()*256).toString(16)).slice(-2);
        const g=("0"+Math.floor(Math.random()*256).toString(16)).slice(-2);
        const b=("0"+Math.floor(Math.random()*256).toString(16)).slice(-2);
        return `#${r}${g}${b}`
    }
    return(
        <div className="outer_container" style={{background:Color}}>
            <button onClick={()=>{setColor(genrateit)}}>GENRATE</button>
            <h2>{Color}</h2>
        </div>
    )
}