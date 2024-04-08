import React from 'react'
import './Footer.css'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import {Link} from "react-router-dom"

export default function Footer() {
  return (
    <div className='Footer'>
        <h4>Proyecto creado por Martín Fernandez</h4>
        <div className="socials">
        <Link className='link-socials' to="https://www.linkedin.com/in/martin-fernandez-1b1965220/"> <FaLinkedinIn/> </Link>
        <Link className='link-socials' to="https://github.com/Chiino147"> <FaGithub /></Link>
        </div>
    </div>
  )
}
