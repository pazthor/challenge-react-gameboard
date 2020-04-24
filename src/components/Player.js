import React from "react";
import PropTypes from "prop-types";
import PlayerStatus from "./PlayerStatus";
import PlayerImage from "./PlayerImage";

const Player = ({ type, player }) => {
  const userInfo = (player) => {
    return (
      <>
        <PlayerImage image={player.image} />
        <PlayerStatus
          name={player.name}
          hPMax={player.maxHp}
          healthPoints={player.hp}
          shield={player.shield}
        />
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
