import { useState } from "react";
import { Link } from "react-router-dom";
export default function Header(){
    const[toggle,settoggle]=useState(1);
    const[fix,setfix]=useState(false);

    function updatetoggle(id){
        settoggle(id);
    }

    function setfixed(){
        if(window.scrollY >= 50){
            setfix(true)
        }
        else{
            setfix(false)
        }
    }
    window.addEventListener("scroll",setfixed);

    return(
        <>
            <div class="header">
                <nav className={fix? "navbar fixed" : "navbar"}>
                    <div class="logo">
                        <span class="h">H</span><span>omefy</span>
                    </div>
                    <ul>
                        <li onClick={()=>updatetoggle(1)} class={toggle===1? "green" : "li"}>Home</li>
                        <li onClick={()=>updatetoggle(2)} class={toggle===2? "green" : "li"}>Services</li>
                        <li onClick={()=>updatetoggle(3)} class={toggle===3? "green" : "li"}>About us</li>
                        <li onClick={()=>updatetoggle(4)} class={toggle===4? "green" : "li"}>Contact us</li>
                    </ul>
                    <div class="buttons">
                    <Link to="/log" > <button class="login">Log in</button></Link>
                        <Link to="/sign" > <button class="signup">sign Up</button></Link>
                    </div>
                </nav>
            </div>
            <div class="Title">
                <h1>Lets Help You To Get Your</h1>
                <h1>Dream Home</h1>
            </div>
        </>
    );
}