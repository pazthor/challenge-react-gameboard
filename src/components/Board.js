import React, { useState, useEffect } from "react";
import InfoGame from "./InfoGame";
import Players from "./Players";
import Cards from "./Cards";
import ModalEndGame from "./base/Modal";

const BoardComponent = ({
  id,
  currentTurn,
  maxTurns,
  turnsLeft,
  monsterHp,
  playerHp,
  onReset
}) => {
  const [endGame, setEndGame] = useState(false);


  useEffect(() => {
    const hasHpMonster = monsterHp > 0;
    const hasHpPlayer = playerHp > 0;
    const hastTurns = currentTurn < maxTurns;
    const isGameOver = !(hasHpMonster && hasHpPlayer && hastTurns);
    setEndGame(isGameOver);
  }, [monsterHp, playerHp, currentTurn]);

  return (
    <>
      <InfoGame
        current={currentTurn}
        past={currentTurn - 1}
        left={turnsLeft}
        maxTurn={maxTurns}
        gameId={id}
      />
      <Players gameId={id} />
      <br />
      <Cards />
      <ModalEndGame
        show={endGame}
        closeModal={()=> {setEndGame(false); onReset()} }
        isWinner={!monsterHp && currentTurn < maxTurns}
      />
    </>
  );
};

export default BoardComponent;
