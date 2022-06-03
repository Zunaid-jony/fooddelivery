import { AccountBalanceWalletOutlined, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import React from 'react'
import MenuContainer from './../../MenuContainer';
import { Link } from "react-router-dom";


function Navigations() {
  return (
    <div>
        {/* boottom menu */}
       <div className="bottomMenu">
        <ul id="menu">
          <MenuContainer to ="/home" icon={<HomeRounded />} isHome />
          <MenuContainer to="" icon={<Chat />} />
          <MenuContainer to="login" icon={<AccountBalanceWalletOutlined />} />
          <MenuContainer to="/" icon={<Favorite />} />
          <MenuContainer to="/" icon={<SummarizeRounded />} />
          <MenuContainer to="/" icon={<Settings />} />

          <div className="indicator"></div>
        </ul>
      </div>



    </div>
  )
}

export default Navigations