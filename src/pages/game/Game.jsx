import React from 'react'
import axios from "axios"
import { useState,useEffect} from 'react';
import {Link,useParams} from "react-router-dom"
import './Game.css'


export default function Photo() {
  //Informacion de los pokemones
  const [name, setName] = useState();
  const [Id, setId] = useState();
  const [Image, setImage] = useState();
  //Informacion del jueggo
  const [Vida, setVida] = useState(3);
  const [Gano,setGano] = useState(0)
  const modalidad = useParams()

  //Funcion para verificar que el usuario acerto o no
  function AdivinarPokemon(){ 
    console.log("entrre")
    const input = document.getElementById("input-adivinar").value
    const answer = input.toLowerCase()
    if(answer === name){
      setGano(1)
    } else {
      if(Vida === 0){
      }else{
        setVida(Vida - 1)
      }
    }
  }


  useEffect(() => {

    const numberRandom = Math.floor(Math.random() * 1000) + 1
    const url = 'https://pokeapi.co/api/v2/pokemon/' + numberRandom
    //Peticion de los datos necesarios para la modalidad del juego
    if(modalidad.game === "pokedex"){
      axios.get(url).then((res) => {setName(res.data.name); setId(res.data.id) }).catch((error) =>  console.error("No se encontro"))
    }else{
      axios.get(url).then((res) => {setName(res.data.name); setImage(res.data.sprites.front_default) }).catch((error) =>  console.error("No se encontro"))
    }
  },[])

  return (
    <div className='game-display'>

      <div className="game-playing">

        <div className="game-pokemon">
          <h2>¿Que pokemon es?</h2>
          <img className='game-photo' src={Image}></img>
          <h1>{Id}</h1>
        </div>

        <div className={Vida<1?'game-loose':'card-hide'}>
          <h2>Perdiste!</h2>
          <Link className="button-home" to='/'>Volver</Link>
        </div>

        <div className={Gano===1?'game-winning':'card-hide'}>
          <h2>Ganaste!</h2>
          <Link className='button-home' to='/'>Volver</Link>
        </div>

        <input id='input-adivinar' type="text" placeholder='¿Ditto?' />

        <p className='game-count-lifes'>Vidas restantes: {Vida}</p>
        
        <button className="button-input" onClick={() => {
          AdivinarPokemon()
        }}>{Vida < 1 ? "PERDISTE!" : "!ADIVINAR!" }</button>
        <Link className='button-home' to='/'>Volver</Link>
      </div>
    </div>
  )
}
