import React, { useState } from "react";
import Header from "../../components/Header";
import PizzaList from "../../components/PizzaList";

const DashBoard = (props) => {
  const getFromCart = () => {
    const data = JSON.parse(localStorage.getItem("cart"));
   if(!data)
   return 0;
    return data.length;
  };
  const [cartSize, setCartSize] = useState(getFromCart());
  return (
    <div>
      <Header cartSize={cartSize} />
      <PizzaList getFromCart={getFromCart} setCartSize={setCartSize} />
    </div>
  );
};

export default DashBoard;
