import React from 'react'
import "../css/Footer.css"

import { BsInstagram, BsYoutube, BsGithub } from "react-icons/bs";

function Footer() {

    return (
        <div id='footer_main' >
            <div id='footer_c1'>
                <div className='footer_subContaine'>
                    <p>PCommerce</p>
                    <p>It is a UserFriendly Website</p>
                </div>
                <div className='footer_subContaine'>
                    <h4>Subscribe to get important updates</h4>
                    <form>
                        <input type='text' placeholder='YOUR E-MAIL' />
                        <button>SUBSCRIBE</button>

                    </form>
                </div >
                <div className='footer_subContaine'>
                    <p>Folllow Us</p>

                    <p>  <span ><BsGithub /></span>
                        <span ><BsInstagram /></span>
                        <span ><BsYoutube /></span> </p>

                </div>
                <div className='footer_subContaine'>
                    <p>Call Us</p>
                    <h5>63500XXXXX</h5>
                </div>
            </div>
            
            <hr />
            <div id='footer_c2' >
                <div >
                    <p>@ {new Date().getFullYear()} PCommerse. All Rights Reserved</p>
                </div>
                <div >
                    <p>PRIVACY POLICY</p>
                </div>
                <div >
                    <p>CONSUMER POLICY</p>
                </div>
                <div>
                <p>TERMS & CONDTIONS</p>
                </div>
            </div>

        </div>

    )
}

export default Footer