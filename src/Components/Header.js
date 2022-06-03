import {  BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material'
import React from 'react'
import Logo from '../../src/Components/images/img/f5.png'
import Profile from '../../src/Components/images/jony.png.jpg'
import { useEffect } from 'react';

function Header() {

    // check out options active
 useEffect(()=>{
     const toggleMenu  = document.querySelector(".toggleMenu");
     toggleMenu.addEventListener('click',()=>{
         document.querySelector('.rightMenu').classList.toggle('active')
     })

 })

  return <header>
      <img src={Logo}
      className='logo' alt=''></img>

      <div className='inputBox'>
          <SearchRounded className='searchIcon'/>
          <input type="text" placeholder="Search"/>
      </div>
      <div className='shoppingCart'>
          <ShoppingCartRounded className='cart'/>
          <div className='cart_content'>
              <p>2</p>
          </div>
      </div>
     <div className='profileContainer'>
        <div className='imgBox'>
            <img 
            src={Profile}
            className='profilePic'
            ></img>
        </div>
        <h2 className='userName'>Md Jony ...</h2>
     </div>
     <div className='toggleMenu'>
         <BarChart  className='toggleIcon'/>
     </div>
  </header>
}

export default Header