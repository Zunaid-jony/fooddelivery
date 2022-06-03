import "./App.css";
import Header from "./Components/Header";
import MenuContainer from "./Components/MenuContainer";
import {
  AccountBalanceWalletOutlined,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import BannerName from "./Components/BannerName";
import benner from "../src/Components/images/img/delivery.png";
import SubMenuContainer from "./Components/SubMenuContainer";
import MenuCard from "./Components/MenuCard";
import Froot from "../src/Components/images/img/f5.png";
//akto 
import { MenuItems, Items } from "../src/Components/Data";
import ItemCard from "./Components/ItemCard";
import RoketCard from "./Components/RoketCard";
import CartItem from "./Components/CartItem";
import Buy from '../src/Components/images/img/buy-card.jpg'
import { Button } from "@mui/material";
import Navigations from './Components/Shared/Navigation/Navigations';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from '../src/Components/Login/Login/Login'

function App() {




  
  //main dish state
  const [isMainData, setMainData]= useState(
    Items.filter((element)=> element.itemId === "buger01")
  );
    //end

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");
    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

    // Menu cards
    
    const menuCards = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCard");
    function setMenuCardActive() {
      menuCards.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    menuCards.forEach((n) => n.addEventListener("click", setMenuCardActive));
    //isMainData ata deya hoise
  }, [isMainData]);

  //main dish on function filters
  const setData =(itemId)=>{
    setMainData(Items.filter((element)=> element.itemId === itemId ))
  }
  return (
    <div className="App">


    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login></Login> }></Route> 
      </Routes> 
    
    </BrowserRouter>


       


      {/* Heder sectin */}
      <Header />

      {/* main sectin */}
      <main>
        <div className="mainContainer">
          <div className="banner">
            <BannerName name={"Jony"} discount={"30"} link={"#"} />
            <img src={benner} className="deliveryPic"></img>
          </div>
          {/* dishContainer */}
          <div className="dishContainer">
            <div className="menuCard">
              <SubMenuContainer name={"Menu Category"} />
            </div>
            {/* dfffffffffffffff */}
            <div className="rowContainer">
              {MenuItems &&
                MenuItems.map((data) => (
                  <div key={data.id} onClick={()=> setData(data.itemId)}>
                    <MenuCard
                      imgSrc={data.imgSrc}
                 
                      name={data.name}
                      isActive ={data.id === 1 ? true : false}
                    ></MenuCard>
                  </div>
                ))}
            </div>


            {/*filter card */}
            
            <div className="dishitemContainer">
            {
              isMainData && isMainData.map(data=> (
                <ItemCard 
                key={data.id}
                imgSrc={data.imgSrc}
                 name={data.name} 
                 ratings={data.ratings}
                  price={data.price} />

              ))
            }


     
            

            </div>

            



          </div>
        </div>
        {/* visa card */}
        <div className="rightMenu">
          <div className="debitCardContainer">
            <div className="debitCard">
              <RoketCard/> 
              
            </div>
          </div> 

          <div className="cartCheckOutContainer">
          <SubMenuContainer name={"Carts Items"}/>
            <div className="cartContainer">
            
              <div className= "cardItems">
               <CartItem 
               name={'kachi kahba'}
               imgSrc={Froot}
               price={'44'}
               qty={'4'}
               /> 

               {/*  */}

              </div>  
            </div>

            <div className="totalSection">
               <h3>Total</h3>
               <p><span> $</span>  34</p>
            </div> 
            <button className="checkOut">Check Out</button>
          </div>
        </div>


      </main>
      <Navigations></Navigations> 
     
    </div>
  );
}

export default App;
