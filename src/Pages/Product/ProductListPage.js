import React from "react";
import ProductCard from "./Components/ProductCard";
import './Style/ProductList.css';
import { Data } from "../../core/data/bids";
import EmptyProduct from "./Components/EmptyProduct";
import Header1 from "../../Shared/Header1";

// one way data binding shareing!
const ProductListPage = () => {
    const BidsData = Data;
      const bidNow =(id)=>{
            console.log("we clicked on movie id = ", id);
        };
        <Header1/>
        const displayBids =()=>{
         if (BidsData.length===0){return <EmptyProduct/>;}
        else {
            return BidsData.map((Bid)=>{
            return (
        <ProductCard 
            key={Bid.id} 
            id={Bid.id}
            name={Bid.name} 
            desc={Bid.description} 
            img={Bid.image}
            Bid={bidNow}
            />
            );
       });
            }
        };
    
    return <div className="Product-List">{displayBids()} </div>;
        };
     
export default ProductListPage;