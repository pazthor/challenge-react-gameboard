import React, { useContext, useEffect } from "react";
import Player from "./Player";
import { store } from "../store";
import { getPlayersFromGame, getMonsterFromGame } from "../actions";
import { Container, Row, Col } from "react-bootstrap";
const Players = ({ gameId }) => {
  const { player, monster, setMonster, setPlayer } = useContext(store);

  useEffect(() => {
    const getPlayer = async (id) => {
      const monster = await getMonsterFromGame(id);
      const player = await getPlayersFromGame(id);
      setPlayer(player);
      setMonster(monster);
    };

    getPlayer(gameId);
  }, [gameId]);
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Player type={1} player={player} />
          </Col>
          <Col>
            <Player type={0} player={monster} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Players;
