import React from "react";
import '../Style/ProductCard.css';
import { Link } from "react-router-dom";
// props ---> property / attributes
// read only!
const ProductCard=(props)=>{
    return (
        <div className="Product-Card">
        <div className="Card-top">
            <img src={props.img} alt="Product-Card"/>
        </div>
        <div className="Card-info">
            <h4 className="title">{props.name}</h4>
            <p className="info">{props.desc}</p>
        {/*How to call events in React*/} 
           <button> 
            <Link to={"/product-info/"+props.id}>
                       Bids Now!

            </Link>
           </button>
        </div>
            </div>
            );
};
export default ProductCard;