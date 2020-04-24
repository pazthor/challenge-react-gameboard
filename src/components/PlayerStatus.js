import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const PlayerStatus = ({ name, hPMax, healthPoints, shield, image }) => {
  return (
    <>
      <br />
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <ListGroup variant="flush">
          <ListGroup.Item>Name: {name}</ListGroup.Item>
          <ListGroup.Item>
            HP: {healthPoints}/{hPMax}
          </ListGroup.Item>
          <ListGroup.Item>Shiled: {shield}</ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};

export default PlayerStatus;
