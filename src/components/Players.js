import React, { useContext, useEffect } from "react";
import Player from "./Player";
import { store } from "../store";
import {getPlayersFromGame, getMonsterFromGame} from "../actions";
const Players = ({gameId}) => {
  const {player, monster, setMonster, setPlayer} = useContext(store);

 
  useEffect( () => {
    const getPlayer = async (id) => {
      const monster =  await getMonsterFromGame(id)  
      const player =  await getPlayersFromGame(id)  
      setPlayer(player)
      setMonster(monster)
      
     }
     
    getPlayer(gameId)
    
    
  }, [gameId]);
  return (
    <>
      {console.log(player)}
      <Player type={1} player={player}/>
      <Player type={0} player={monster}/>
    </>
  );
};

export default Players;
