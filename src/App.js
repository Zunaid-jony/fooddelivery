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
import { useEffect } from "react";
import BannerName from "./Components/BannerName";
import benner from "../src/Components/images/img/delivery.png";
import SubMenuContainer from "./Components/SubMenuContainer";
import MenuCard from "./Components/MenuCard";
import Froot from "../src/Components/images/img/f5.png";
import { MenuItems, Items } from "../src/Components/Data";
function App() {
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
  }, []);
  return (
    <div className="App">
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
                  <div key={data.id}>
                    <MenuCard
                      imgSrc={data.imgSrc}
                 
                      name={data.name}
                      isActive ={data.id === 1 ? true : false}
                    ></MenuCard>
                  </div>
                ))}
            </div>
            {/* djjjjjjjjjjjjjjjjjjjjjjjjjjjjjk */}
            <div className="dishitemContainer"></div>
          </div>
        </div>
        <div className="rightMenu"></div>
      </main>
      {/* boottom menu */}
      <div className="bottomMenu">
        <ul id="menu">
          <MenuContainer link={"#"} icon={<HomeRounded />} isHome />
          <MenuContainer link={"#"} icon={<Chat />} />
          <MenuContainer link={"#"} icon={<AccountBalanceWalletOutlined />} />
          <MenuContainer link={"#"} icon={<Favorite />} />
          <MenuContainer link={"#"} icon={<SummarizeRounded />} />
          <MenuContainer link={"#"} icon={<Settings />} />

          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
