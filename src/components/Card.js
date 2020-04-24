import React, { useContext } from "react";
import { store } from "../store";
import  {Card as  CardBoostrap, Button  }  from "react-bootstrap";

const Card = ({ id, effect }) => {
  const { setCardSelected } = useContext(store);
  const onCardSelected = () => {
    setCardSelected(id);
  };

  return (
    <>
      <Button variant="outline-success" onClick={onCardSelected}>
        {" "}        
        <CardBoostrap
          bg='info'          
          text= "white"
          style={{ width: "18rem" }}
        >
          <CardBoostrap.Img variant="top" src={`${process.env.PUBLIC_URL}/defaultCard.png `} />
          <CardBoostrap.Body>
            <CardBoostrap.Title>Select one </CardBoostrap.Title>
            <CardBoostrap.Text>
             
            </CardBoostrap.Text>
          </CardBoostrap.Body>
        </CardBoostrap>
        <br />
      </Button>
    </>
  );
};

export default Card;
