import React from "react";

const PlayerStatus = ({ name, hPMax, healtPoints, shield }) => {
  return (
    <>
      <div>
        <div>
          <h3> Name: {name} </h3>
        </div>
        <div>
          <span>
            HP: {healtPoints}/{hPMax}
          </span>
          <span>Shiled: {shield}</span>
        </div>
      </div>
    </>
  );
};

export default PlayerStatus;
