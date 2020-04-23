import React from 'react'
import PropTypes from "prop-types";
import PlayerStatus from './PlayerStatus';
import PlayerImage from './PlayerImage';

const Player = ({type, name, hPMax,healthPoints, shield, image}) => {

  return(
    <>
    <PlayerImage image ={image} />
    <PlayerStatus 
    name={name}
    hPMax={hPMax}
    healthPoints={healthPoints}
    shield={shield}
    />
    
    </>
  )
}

export default Player;

Player.propTypes = {
  //onClickPhysical: PropTypes.func.isRequired,
  name : PropTypes.string.isRequired,
  shield : PropTypes.string.isRequired,
  hPMax : PropTypes.string.isRequired,
  healthPoints: PropTypes.string.isRequired  
};
