import React, { useContext } from 'react'
import {store} from '../store';

const InfoGame = ({current, past, left}) => {
const context = useContext(store)
const  {dispatch} = context;

dispatch({ type: 'action description' })
  return (
    <>
    <h1>Turns</h1>
    <div>
      <div><h4>CURRENT:</h4> <h2>{current}</h2></div>
      <div><h4>PAST:</h4> <h2>{past}</h2></div>
      <div><h4>LEFT:</h4> <h2>{left}</h2></div>
    </div>
    <button>END TURN</button>
    </>
  )
}

export default InfoGame;
