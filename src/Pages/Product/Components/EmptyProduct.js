import React from "react";
const EmptyProduct=()=>{
    return(
        <div>
                <p 
                  style={{
                    textAlign: 'center',
                    padding:'5px 10px', 
                    backgroundColor: '#eee',
            }}>
                There are no bids in that moment!
            </p>
        </div>
    );
};
export default EmptyProduct;