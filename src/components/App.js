import React, { useState, useEffect, useContext } from "react";
import LoginComponent from "./LoginComponent";
import BoardComponent from "./Board";
import {store} from "../store";

function App() {
  const [isLoginState, setIsLoginstate] = useState(false);
  const {gameInfo, monster,player, reset} = useContext(store)
  const handleReset = () => {
    setIsLoginstate(false);
    reset(true);
  }
  
  return (
    <>
      {isLoginState ? (
        <BoardComponent
          id={gameInfo.id}
          currentTurn={gameInfo.currentTurn}
          maxTurns={gameInfo.maxTurns}
          turnsLeft={gameInfo.turnsLeft}
          monsterHp={monster.hp}
          playerHp={player.hp}
          onReset={handleReset}
        />
      ) : (
        <LoginComponent onchangeButton={() => setIsLoginstate(true)} />
      )}
    </>
  );
}

export default App;
