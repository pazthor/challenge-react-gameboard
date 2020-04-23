import React, {useState, useEffect} from "react";
import LoginComponent from "./LoginComponent";
import BoardComponent from "./Board";

function App() {  
  const [isLoginState, setIsLoginstate] = useState(false)
  

  useEffect(() => {
    
    
  }, [])
  return (
    <>
      {isLoginState ? <BoardComponent /> : <LoginComponent onchangeButton={()=> setIsLoginstate(true)} />}

      
    </>
  );
}

export default App;
