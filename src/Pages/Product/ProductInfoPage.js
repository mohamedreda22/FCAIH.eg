import React from "react";
import { useParams, useSearchParams} from "react-router-dom";

const ProductInfoPage=()=>{
    //Hooks |Helper to get parameter from the route
    let {id}=useParams();
    // Query params
    let [searchParams] = useSearchParams();
    console.log(searchParams.get("sort"));
    // amazon.eg/pages/products?size=sm&price=1000&key=value etc

    // Segments
    // amazon.eg/pages/products
    console.log(id);


    return(
        <div>
            <h1>
                Product Info
            </h1>
        </div>
    );
};
export default ProductInfoPage;