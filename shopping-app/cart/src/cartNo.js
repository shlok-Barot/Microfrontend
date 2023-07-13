import React, { useState, useEffect } from "react";
import "./index.css";

const Cart = (props) => {
    debugger
    const [cardMessage, setCartMessage] = useState(0)
    console.log(props, "Props");

    return (
        <div className="cart_dateils">
            <label> <b>User name </b>:- Osborne Jacobi</label>
            <label> <b>Email Id </b>:- Nathanial66@hotmail.com</label>
            <label> <b>Product name </b>:- Gorgeous Wooden Chicken</label>
        </div>
    )
}

export default Cart