import React from 'react'
import "../css/Banner2.css"
import { FaTruckMoving } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";

function Banner2() {
    return (
        <div id='Banner_M_c3'>
            <div id='Banner_c3_1'>
                <FaTruckMoving />
                <p>Super Fast Free Delevery</p>
            </div>
            <div id='Banner_c3_2'>
                <div id='Banner_c3_2_1'><p>Top Brands</p></div>
                <div id='Banner_c3_2_2'><p>Mega Deals</p></div>
            </div>
            <div id='Banner_c3_3'>
                <RiSecurePaymentLine />
                <p>Super Secure Payment System</p>
            </div>
        </div>
    )
}

export default Banner2