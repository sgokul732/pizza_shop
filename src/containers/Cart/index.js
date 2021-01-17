import React, { useState } from "react";
import CartTable from "../../components/CartTable";
import Header from "../../components/Header";

const Cart = (props) => {
    
  const getFromCart = () => {
    const data = JSON.parse(localStorage.getItem("cart"));
    if(!data)
    return 0;
    return data.length;
  };
  const [cartSize,setCartSize]=useState(getFromCart());
  return (
    <div>
      <Header cartSize={cartSize}  />
      <CartTable getFromCart={getFromCart} setCartSize={setCartSize}/>
    </div>
  );
};

export default Cart;
