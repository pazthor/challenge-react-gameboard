import React, { useContext } from "react";
import {store} from '../store'

const Card = ({ id, effect }) => {
  const {setCardSelected} = useContext(store)
  const onCardSelected = () => {
    setCardSelected(id);
  }
  
  return (
    <>
      
      <button onClick={ onCardSelected}> {effect } Secret Card</button>
    </>
  );
};

export default Card;
