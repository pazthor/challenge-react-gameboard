import React from "react";

const LoginComponent = ({onchangeButton}) => {
  return (
    <>
      <div>
        <span>Iniciar sesión o login</span>
        <input />
        <button onClick={() => onchangeButton()}> iniciar sesión</button>
      </div>
    </>
  );
};

export default LoginComponent;
