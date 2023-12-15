import React from 'react'
import { FaBars } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
import "../css/Navbar.css"

function Navbar() {
  return (
    <>
      <nav>
        {/* <FaBars /> */}
        <div id='Navbar_c1'> 
        <GiCommercialAirplane />
        <p>PCommerce</p>
       </div>

        <div id='Navbar_c2' >
          <div id='Navbar_serch' ><input type="text" placeholder='Serch Your Praduct'/></div>
          <div><button>Login</button></div>
          <div><FaShoppingCart /></div>

        </div>

      </nav>
    </>
  )
}

export default Navbar