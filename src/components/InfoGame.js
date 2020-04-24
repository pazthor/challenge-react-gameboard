import React, { useContext } from 'react'
import {store} from '../store';
import {postNextTurn,getMonsterFromGame, getPlayersFromGame, getPlayerCards} from '../actions'
import { Navbar, Nav, Form, Button } from "react-bootstrap";

const InfoGame = ({gameId, current, past, left}) => {
const {setGame,setMonsterEffect, cardSelected, setCardSelected, setPlayer, setMonster, setCardList} = useContext(store)

const onNextTurn = async (id, gameId) => {
  
  const {game, monsterEffect} = await postNextTurn( gameId, id);
  setGame(game);
  setMonsterEffect(monsterEffect)
  setCardSelected(false)
  const monster = await getMonsterFromGame(gameId);
  const player = await getPlayersFromGame(gameId);
  const cards =  await getPlayerCards(id)    
  
  setCardList(cards)
  setPlayer(player);
  setMonster(monster);
}


  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#">Turns</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">CURRENT:{current}</Nav.Link>
      <Nav.Link href="#features">PAST:{past}</Nav.Link>
      <Nav.Link href="#pricing">LEFT:{left}</Nav.Link>
    </Nav>
    <Form inline>
      
      <Button variant="outline-info" disabled={!cardSelected} onClick={()=> onNextTurn( cardSelected, gameId)}>END TURN</Button>
    </Form>
  </Navbar>


    
    </>
  )
}

export default InfoGame;
