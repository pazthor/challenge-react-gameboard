import React from "react";
import { Media, Image, Container, Row, Col } from "react-bootstrap";

const PlayerImage = ({ image = "holder.js/64x64" }) => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image roundedCircle thumbnail src={image} alt="Player" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PlayerImage;
