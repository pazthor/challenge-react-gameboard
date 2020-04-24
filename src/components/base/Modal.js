import React from "react";
import { Modal } from "react-bootstrap";


const ModalEndGame = ({ show, closeModal, isWinner }) => {
  return (
    <Modal show={show} onHide={closeModal} centered>
    
      <Modal.Body className="text-center mt-4">
        {isWinner ? (
          <h3>
            Contratulations!
            <br />
            You Win! :D
          </h3>
        ) : (
          <h3>
            Ups.. you lose! :C 
            <br />
          </h3>
        )}
      </Modal.Body>
      <Modal.Footer>
        <button onClick={closeModal}>new Game</button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEndGame;
