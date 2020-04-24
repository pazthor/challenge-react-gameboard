import React, { useEffect, useContext } from 'react'
import Card from './Card'
import { store } from "../store";
import {getPlayerCards} from "../actions";

const Cards = () => {
  const {player, setCardList, cardList} = useContext(store);

  useEffect(() => {
    const getCards = async (id) => {
      
      const cards =  await getPlayerCards(id)    
      console.log('cards')
      console.log(cards)
      setCardList(cards)
      
     }
     
     getCards(player.id)
    
  }, [player])
  const showCards = (lists) => {
    console.log(lists)
    const result =  lists.map((x,index) => {
      
      return <Card key={index} id={x.id} value={x.value} effect={x.effect} />
    })
    return result;
  }
  
  return (
    <>
    {cardList? showCards(cardList): "cargando"}
    </>
  )
}

export default Cards;