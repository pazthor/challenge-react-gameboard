import React from "react";
import PropTypes from "prop-types";
import PlayerStatus from "./PlayerStatus";
import PlayerImage from "./PlayerImage";
import { Container } from "react-bootstrap";

const Player = ({ type, player }) => {
  const userInfo = (player) => {
    return (
      <>
      <Container>
      
        <PlayerStatus
        image={type?`${process.env.PUBLIC_URL}/defaultUser.png`:player.image}
          name={player.name}
          hPMax={player.maxHp}
          healthPoints={player.hp}
          shield={player.shield}
        />
      </Container>
        
      </>
    );
  };

  return <>{player ? userInfo(player) : "cargando"}</>;
};

export default Player;

Player.propTypes = {
  //onClickPhysical: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  shield: PropTypes.string.isRequired,
  hPMax: PropTypes.string.isRequired,
  healthPoints: PropTypes.string.isRequired,
};
