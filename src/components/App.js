import React, { useState, useContext } from "react";
import LoginComponent from "./LoginComponent";
import BoardComponent from "./Board";
import { store } from "../store";
import { Container } from "react-bootstrap";
import {postCreateNewGame} from "../actions";

function App() {
  const [isLoginState, setIsLoginstate] = useState(true);
  const { gameInfo, monster, player, reset, setGame} = useContext(store);
  const handleReset = () => {
    setIsLoginstate(false);
    reset(true);
  };

  const handledCreateGame = async (name) =>{
    const game =  await postCreateNewGame(name)  
    setGame(game)
    setIsLoginstate(!!game);

  }

  return (
    <>
      <Container>
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
          <LoginComponent onchangeButton={(name) => handledCreateGame(name) } />
        )}
      </Container>
    </>
  );
}

export default App;
