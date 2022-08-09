import React from "react";
import headshot from "../images/me.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Bio() {
    return (
        <div className="bio">
            <img src={headshot} alt="Justin Zhao is a web dev" />
            <h1>Justin Zhao</h1>
            <h3>Front-end Developer</h3>
            <div className="btns">
                <a href="mailto:justinzhao1999@gmail.com"><button id="mail"><FontAwesomeIcon icon={faEnvelope} /></button></a>
                <a href="https://www.linkedin.com/in/jz1999"><button id='linkedin'><FontAwesomeIcon icon={faLinkedinIn} /></button></a>
                <a href='https://www.instagram.com/justinzzhao'><button id='instagram'><FontAwesomeIcon icon={faInstagram} /></button></a>
                <a href='https://github.com/justinz99'><button id='github'><FontAwesomeIcon icon={faGithub} /></button></a>
            </div>
        </div>
    )
}

