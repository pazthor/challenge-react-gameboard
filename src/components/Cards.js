import React from 'react'
import Card from './Card'

const Cards = ({cardList}) => {
  
  const showCards = (lists) => {
    const result =  lists.maps(x => {
      return <Card card={x} />
    })
    return result;
  }
  
  return (
    <>
    {showCards(cardList)}
    </>
  )
}

export default Cards;