import React from "react"
import trollFace from "../images/troll-face.png"

export default function Header() {
    return (
        <header>
            <div className="logo">
                <img src={trollFace} alt="troll-face-logo" className="logoImg"/>
                <h3>Meme Generator</h3>
            </div>
            <h5>React Course - Project 3</h5>
        </header>
    )
}