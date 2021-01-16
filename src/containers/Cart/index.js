import React, { useState } from "react";
import CartTable from "../../components/CartTable";
import Header from "../../components/Header";

const Cart = (props) => {
    
  const getFromCart = () => {
    const data = JSON.parse(localStorage.getItem("cart"));
    return data.length;
  };
  const [cartSize,setCartSize]=useState(getFromCart());
  return (
    <div>
      <Header cartSize={cartSize}  />
      <CartTable getFromCart={getFromCart}/>
    </div>
  );
};

export default Cart;
