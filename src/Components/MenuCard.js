import { ChevronRightOutlined } from '@mui/icons-material'
import React from 'react'
import Img from '../../src/Components/images/img/f5.png'

function MenuCard({name,imgSrc,isActive}) {
  return (
    <div className={`rowMenuCard ${isActive ? `active`: ``}`}>
        <div className='imgBox'>
         <img src={imgSrc}></img>
        </div> 
        <h3>{name}</h3>
        <i className='loadMenu'>
            <ChevronRightOutlined/>
        </i>

    </div>
  )
}

export default MenuCard