import React from 'react'

function MenuContainer({link, icon, isHome}) {
  return <li className={isHome ? "active": ""}>
      <a href={link}>
          <samp className="icon">{icon}</samp>
      </a>
  </li>
}

export default MenuContainer;