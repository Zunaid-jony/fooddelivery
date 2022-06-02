import React from 'react'
import card from '../Components/images/img/roket.jpg'

function RoketCard() {
  return (
    <div className='cardGroup'>
        <img src={card}
         className='card_logo'
         ></img>
         
        <img src={card}
         className='card_logo'
         ></img>

         <div className='card_ring'></div> 
         
    </div>
  )
}

export default RoketCard