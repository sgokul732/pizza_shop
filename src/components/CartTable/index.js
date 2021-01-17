import React, { useState } from "react";

import { ButtonGroup, Table, Button } from "reactstrap";
import "./style.css";
import noData from "../../assets/images/no-data.png";

const CartTable = (props) => {
const {setCartSize,getFromCart}=props;
  const getCartData=()=>{
    const cartData = JSON.parse(localStorage.getItem("cart"));
    return cartData;
  }
  const [cartTable,setCartTable]=useState(getCartData());
  const addToCart = (id) => {
    const cartData = JSON.parse(localStorage.getItem("cart"));
    const dataIndex = cartData.findIndex((entry) => entry.id === id);
    const newData = cartData.find((entry) => entry.id === id);
    const data={...newData};
    const rate=data.price/data.quantity;
    data.price+=rate;
    data.quantity+=1;
    cartData[dataIndex]=data;
    localStorage.setItem('cart',JSON.stringify(cartData));
    setCartTable(cartData);
  };

  const removeFromCart = (id) => {
    const cartData = JSON.parse(localStorage.getItem("cart"));
    const dataIndex = cartData.findIndex((entry) => entry.id === id);
    const newData = cartData.find((entry) => entry.id === id);
    if(newData.quantity>1){
    const data={...newData};
    const rate=data.price/data.quantity;
    data.price-=rate;
    data.quantity-=1;
    cartData[dataIndex]=data;
    localStorage.setItem('cart',JSON.stringify(cartData));
    setCartTable(cartData);
    }
    else{
      const data=[...cartData];
      data.splice(dataIndex,1);
      localStorage.setItem('cart',JSON.stringify(data));
      setCartTable(data);
      setCartSize(getFromCart);
    }
  };



  const total =
  cartTable &&
  cartTable.reduce((total, item) => (total += parseInt(item.price)), 0);

  if (!cartTable || cartTable.length === 0)
    return <img className="invalid" src={noData} alt="No Data Available" />;
  
  const cartList =
  cartTable &&
  cartTable.map((entry, i) => {
      return (
        <tr key={i}>
          <td>{entry.name}</td>
          <td>{entry.details.addons && entry.details.addons.join(",")}</td>
          <td>{entry.details.toppings && entry.details.toppings.join(",")}</td>
          <td>{entry.quantity}</td>
          <td>
            <ButtonGroup size="sm">
              <Button color="success" onClick={() => addToCart(entry.id)}>
                Add
              </Button>
              <Button color="danger" onClick={() => removeFromCart(entry.id)}>
                Remove
              </Button>
            </ButtonGroup>
          </td>
          <td>{entry.price}</td>
        </tr>
      );
    });
  if (cartTable && cartTable.length) {
    return (
      <div className="cart">
        <h3 className="hero">My Cart</h3>
        <Table centered striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Add-Ons</th>
              <th>Toppings</th>
              <th>Quantity</th>
              <th>Change Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{cartList}</tbody>
        </Table>
        <h3>Total {total}</h3>
      </div>
    );
  }
  return <img className="invalid" src={noData} alt="No Data Available" />;
};

export default CartTable;
