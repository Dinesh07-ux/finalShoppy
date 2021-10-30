import React from 'react';
//import App from './App';
//import Data from './data.json';

const Header=()=>{
    return(
        <div>
        <h1 className="heading">Shopping cart</h1>
        <label>Order-By: </label>
        <select >
            <option value="filter">Select</option>
            <option value="low to high">Low to High</option>
            <option value="high to low">High to Low</option>
        </select>
        <h4>Sizes: </h4>
        <button>XS</button>
        <button>S</button>
        <button>L</button>
        <button>XL</button>
        <button>XXL</button>
        <button>ALL</button><br/><br/>
        <img src="./images/cart.png"  alt= " "className="image2"/>

        </div>
    );
};
export default Header;