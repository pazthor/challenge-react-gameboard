import React, { useContext } from 'react'
import {store} from '../store';
import {postNextTurn} from '../actions'

const InfoGame = ({gameId, current, past, left}) => {
const {setGame,setMonsterEffect, cardSelected, setCardSelected} = useContext(store)

const onNextTurn = async (id, gameId) => {
  const {game, monsterEffect} = await postNextTurn( gameId, id);
  setGame(game);
  setMonsterEffect(monsterEffect)
  setCardSelected(false)
}


  return (
    <>
    <h1>Turns</h1>
    <div>
      <div><h4>CURRENT:</h4> <h2>{current}</h2></div>
      <div><h4>PAST:</h4> <h2>{past}</h2></div>
      <div><h4>LEFT:</h4> <h2>{left}</h2></div>
    </div>
    <button disabled={!cardSelected} onClick={()=> onNextTurn( cardSelected, gameId)}>END TURN</button>
    </>
  )
}

export default InfoGame;
