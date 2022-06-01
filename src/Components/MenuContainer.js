import React from 'react'

function MenuContainer({link, icon}) {
  return <li>
      <a href={link}>
          <samp className="icon">{icon}</samp>
      </a>
  </li>
}

export default MenuContainer;