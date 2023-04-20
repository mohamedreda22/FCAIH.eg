import React from 'react'
//import { Link } from 'react-router-dom'
import '../../../../src/Style/App.css'

const AddYourProduct=()=> {
    return (
        <div className="text-center m-5-auto" style={{marginTop:'40px'}}>
            <h2>Add Your Product</h2>
            <form action="/home" className='add_product'>

                <p>
                    <label >Enter Product Name</label><br/>
                    <input type="text" id='PN' name="Product_Name" required />
                </p>

                <p>
                    <label>Enter Product Description</label>
                    <br/>
                    <input type="text" id='PD' name="Product_Description" required />
                </p>                
                <p>
                    <label>Enter Minimun Bid Amount (in EGP.)</label>
                    <br/>
                    <input type="number" id='BA' name="Minimun_Bid" min="0" step="5" required />
                </p>                
                <p>
                    <label>Enter Auction Time (in minutes)</label>
                    <br/>
                    <input type="time" id='AT' name="Auction_Time" required />
                </p>                
                <p>
                    <label>Select Catagory</label>
                    <br/>
                    <select id="SG" name="Product_Catagory" required >
                        <option value="phones">Phones</option>
                        <option value="cars">Cars</option>
                        <option value="clothes">Clothes</option>
                        <option value="electronics">Electronics</option>
                        <option value="antiquities">Antiquities</option>
                    </select>
{/*                     <input type="option" id='SG' name="Product_Catagory" required />
 */}                </p>                
                <p>
                    <label for="myfile">Upload Image</label>
                    <br/>
                    <input type="file" id='UI' name="Upload_Image" required />
                </p>
                <p style={{padding:'3px'}}>
                    <button id="sub_btn" type="submit" >Add</button>
                </p>            
                <p style={{padding:'3px'}}>
                    <button id="sub_btn" type="reset">Reset</button>
                </p>

            </form>
            <footer >
            </footer>
        </div>
    );
};
export default AddYourProduct;