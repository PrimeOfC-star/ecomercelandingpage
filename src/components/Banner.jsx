import React from 'react'
import image from '../z1.jpg'
import "../css/Banner.css"
import { data } from "../data"
import Product from './Product';


function Banner() {
    console.log(data);
    return (
        <>
            <div id='mainContainer' >
                <div id='Banner_M_c1'>
                    <div id='Banner_M_c1_1'>
                        <p>WELCOME TO</p>
                        <h2>Pratik Store</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, rem quos totam tempora nam aut illo, doloremque saepe corrupti, alias dolorem rerum recusandae harum ducimus.</p>
                        <button>Shop Now</button>
                    </div>
                    <div>
                        <img src={image} alt="" style={{ height: "200px" }} />
                    </div>
                </div>


            </div>

            <div id='Banner_M_c2'>
                <Product data={data} />
            </div>



        </>
    )
}

export default Banner