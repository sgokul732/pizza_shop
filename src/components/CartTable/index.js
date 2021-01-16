
import React from "react";

import { Table } from "reactstrap";
import "./style.css";
import noData from "../../assets/images/no-data.png";

const CartTable = () => {

const cartData = JSON.parse(localStorage.getItem("cart"));

const total=cartData && cartData.reduce((total,item)=>total+=parseInt(item.price),0)

if(!cartData || cartData.length===0)
return <img className="invalid" src={noData} alt="No Data Available" />;
const cartList=cartData && cartData.map((entry,i) => {   
    return (
      <tr key={i}>
        <td>{entry.name}</td>
        <td>{entry.details.addons && entry.details.addons.join(',')}</td>
        <td>{entry.details.toppings && entry.details.toppings.join(',')}</td>
        <td>{entry.quantity}</td>
        <td>{entry.price}</td>
      </tr>
    );
  })
  if (cartData && cartData.length) {
    return (
      <div className="cart">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Add-Ons</th>
              <th>Toppings</th>
              <th>Quantity</th>
              <th>Price</th>
              
            </tr>
          </thead>
          <tbody>
            {cartList}
          </tbody>
        </Table>
        <h3>
        Total  {total}    
        </h3>   
      </div>
    );
  }
  return <img className="invalid" src={noData} alt="No Data Available" />;
};

export default CartTable;
