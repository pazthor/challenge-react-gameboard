import React, { useState } from "react";
import { Button, InputGroup, FormControl, Card } from "react-bootstrap";

const LoginComponent = ({ onchangeButton }) => {
  const [name, setName] = useState("");
  return (
    <>
      <Card>
        <Card.Header>Welcome to Bons Game</Card.Header>
        <Card.Body>
          <Card.Title>What's your name?</Card.Title>
          <Card.Text>
            <InputGroup
              className="mb-3"
              onChange={(event) => setName(event.target.value)}
            >
              <FormControl
                placeholder="NAME"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
          </Card.Text>
          <Button disabled={!name} onClick={() => onchangeButton(name)} variant="primary">
            LET'S PLAY
          </Button>{" "}
        </Card.Body>
      </Card>
    </>
  );
};

export default LoginComponent;
