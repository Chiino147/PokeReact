import React from 'react'
import pokeball from '../../content/pokeball.png'
import {Link} from "react-router-dom"
import './Home.css'
export default function Home() {
  return (
    <div className='home'>
        <img id='pokeball-logo' src={pokeball} alt="" />
        <h1 className='logo-h1'>Adivina el pokemon!</h1>
        <p>Desde la 1°ra generación hasta la ultima!</p>
        <Link className='Button-Home' to='/game/photo'>Por Foto</Link>
        <Link className='Button-Home' to='/game/pokedex'>Por Numero de pokedex</Link>

    </div>
  )
}
