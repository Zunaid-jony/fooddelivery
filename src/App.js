
import './App.css';
import Header from './Components/Header';
import MenuContainer from './Components/MenuContainer';
import { AccountBalanceWalletOutlined, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import { useEffect } from 'react';
import BannerName from './Components/BannerName';
import benner from '../src/Components/images/img/delivery.png'
function App() {
  useEffect(()=>{
    const menuLi = document.querySelectorAll("#menu li");
    function setMenuActive(){
      menuLi.forEach((n)=>n.classList.remove("active"));
      this.classList.add("active")
    }
    menuLi.forEach((n)=> n.addEventListener("click", setMenuActive));

  },[])
  return (
    <div className="App">
      {/* Heder sectin */}
      <Header/>


      {/* main sectin */}
      <main>
        <div className='mainContainer'>
            <div className='banner'> 
              <BannerName name={"Jony"}  discount={"30"}link={"#"}/>
              <img 
              src={benner}
              className="deliveryPic" ></img>
                
            </div>
        </div>
        <div className='rightMenu'></div>
      </main>
      {/* boottom menu */}
      <div className='bottomMenu'>
        <ul id='menu'>
          <MenuContainer link={'#'} icon={<HomeRounded/>} isHome/>
          <MenuContainer link={'#'} icon={<Chat/>}/>
          <MenuContainer link={'#'} icon={<AccountBalanceWalletOutlined/>}/>
          <MenuContainer link={'#'} icon={<Favorite/>}/>
          <MenuContainer link={'#'} icon={<SummarizeRounded/>}/>
          <MenuContainer link={'#'} icon={<Settings/>}/>
        
      
          <div className='indicator'></div>
        </ul>
      </div>
    
    </div>
  );
}

export default App;
