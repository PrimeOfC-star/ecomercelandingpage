import React from "react";
import "../css/Product.css"


function Product(props) {

    let { data } = props

    console.log(data);
    return (
        <>
            <div id="product_main">
                {data.map((data, i) => {
                    return (
                        <div id="box" >
                            <div id="image_div">
                                    <img id="img_tag"
                                        src={data.image}
                                        alt={i}
                                    />
                            </div>
                            <div >
                                <p>{data.title}</p>
                                <p>{data.price}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Product;
