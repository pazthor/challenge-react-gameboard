import React from "react";

const PlayerStatus = ({ name, hPMax, healthPoints, shield }) => {
  return (
    <>
      <div>
        <div>
          <h3> Name: {name} </h3>
        </div>
        <div>
          <span>
            HP: {healthPoints}/{hPMax}
          </span>
          <span>Shiled: {shield}</span>
        </div>
      </div>
    </>
  );
};

export default PlayerStatus;
