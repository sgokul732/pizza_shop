import React, { useState } from "react";

import { ButtonGroup, Table, Button } from "reactstrap";
import "./style.css";
import noData from "../../assets/images/no-data.png";

const CartTable = (props) => {
  const { setCartSize, getFromCart } = props;
  const getCartData = () => {
    const cartData = JSON.parse(localStorage.getItem("cart"));
    return cartData;
  };
  const [cartTable, setCartTable] = useState(getCartData());
  const addToCart = (gid) => {
    const cartData = JSON.parse(localStorage.getItem("cart"));
    const dataIndex = cartData.findIndex((entry) => entry.gid === gid);
    const newData = cartData.find((entry) => entry.gid === gid);
    const data = { ...newData };
    const rate = data.details.rate;
    data.details.total += rate;
    data.details.quantity += 1;
    cartData[dataIndex] = data;
    localStorage.setItem("cart", JSON.stringify(cartData));
    setCartTable(cartData);
  };

  const removeFromCart = (gid) => {
    const cartData = JSON.parse(localStorage.getItem("cart"));
    const dataIndex = cartData.findIndex((entry) => entry.gid === gid);
    const newData = cartData.find((entry) => entry.gid === gid);

    if (newData.details.quantity > 1) {
      const data = { ...newData };
      data.details.total -= data.details.rate;
      data.details.quantity -= 1;
      cartData[dataIndex] = data;
      localStorage.setItem("cart", JSON.stringify(cartData));
      setCartTable(cartData);
    } else {
      const data = [...cartData];
      data.splice(dataIndex, 1);
      localStorage.setItem("cart", JSON.stringify(data));
      setCartTable(data);
      setCartSize(getFromCart);
    }
  };

  const total =
    cartTable &&
    cartTable.reduce(
      (total, item) => (total += parseInt(item.details.total)),
      0
    );

  if (!cartTable || cartTable.length === 0)
    return <img className="invalid" src={noData} alt="No Data Available" />;

  const cartList =
    cartTable &&
    cartTable.map((entry, i) => {
      return (
        <tr key={i}>
          <td>{entry.name}</td>
          <td>{entry.details.addons}</td>
          <td>{entry.details.toppings && entry.details.toppings.join(",")}</td>
          <td>{entry.details.quantity}</td>
          <td>
            <ButtonGroup size="sm">
              <Button color="success" onClick={() => addToCart(entry.gid)}>
                Add
              </Button>
              <Button color="danger" onClick={() => removeFromCart(entry.gid)}>
                Remove
              </Button>
            </ButtonGroup>
          </td>
          <td>{entry.details.total}</td>
        </tr>
      );
    });
  if (cartTable && cartTable.length) {
    return (
      <div className="cart">
        <h3 className="hero">My Cart</h3>
        <Table responsive centered striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Add-Ons</th>
              <th>Toppings</th>
              <th>Quantity</th>
              <th>Change Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{cartList}</tbody>
        </Table>
        <h3>
          Amount Payable <br></br> Rs. {total}/-{" "}
        </h3>
      </div>
    );
  }
  return <img className="invalid" src={noData} alt="No Data Available" />;
};

export default CartTable;
