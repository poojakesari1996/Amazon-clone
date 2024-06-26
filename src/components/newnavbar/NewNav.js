import React from 'react'
import "./NewNav.css"


const NewNav = () => {
  return (
    <div className='new_nav'>
   <div className='nav_data'>
    <div className='left_data'>
        <p>All</p>
        <p>Mobiles</p>
        <p>Best Sellers</p>
        <p>Fashions</p>
        <p>Customer Service</p>
        <p>Electronics</p>
        <p>Prime</p>
        <p>Today's Deals</p>
        <p>Amazon Pay</p>


    </div>
    <div className='right_data'>
    <img src='/nav.png' alt='navata' />
        
    </div>
    </div>      
    </div>
  )
}

export default NewNav
