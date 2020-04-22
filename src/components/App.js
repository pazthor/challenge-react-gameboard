import React, {useState, useEffect} from "react";
import "./App.css";

function App() {  
  const [isLoginState, setIsLoginstate] = useState(false)
  

  useEffect(() => {
    
    
  }, [])
  return (
    <>
      {isLoginState ? <BoardComponent /> : <LoginComponent />}

      <EndGameModal />
    </>
  );
}

export default App;
