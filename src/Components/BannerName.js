import React from 'react'

function BannerName({name, discount,link}) {
  return (
    <div className="bannerContent">
      <h3>Hell {name}</h3>
      <p>Get Free Discount For Every <span> $ {discount}</span> Purchase</p>
      <a href={link}> Learn More</a>

    </div>
  )
}

export default BannerName