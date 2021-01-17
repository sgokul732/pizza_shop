import React, { useState } from "react";

import "./style.css";
import * as uuid from "uuid";

import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  CardImg,
  Row,
  Col,
  ToastHeader,
  ToastBody,
  Toast,
} from "reactstrap";
import PizzaBooking from "../PizzaBooking";

const PizzaCard = (props) => {
  const {
    name,
    description,
    img_url,
    rating,
    price,
    type,
    toppings,
    size,
    getFromCart,
    setCartSize,
  } = props;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [cart, setCart] = useState(false);

  const sizeList = size && size[0].items.map((entry) => entry.size);

  const toppingsList = toppings && toppings[0].items.map((entry) => entry.name);

  const [details, setDetails] = useState({ toppings: [], addons: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.localeCompare("quantity") === 0) {
      const quant = value && parseInt(value) > 0 ? parseInt(value) : 0;
      setDetails({
        ...details,
        [name]: quant,
      });
      return;
    }

    if (name.localeCompare("addon") === 0) {
      setDetails({
        ...details,
        addons: value,
      });
    }
    if (name.localeCompare("top") === 0) {
      let val = Array.from(e.target.selectedOptions, (option) => option.value);
      setDetails({
        ...details,
        toppings: val,
      });
    }
  };

  const handleSubmit = () => {
    if (!details.quantity || !details.addons) {
      return;
    }
    let gid = uuid.v4();
    let obj = {
      gid,
      name,
      details: {
        ...details,
        rate: price,
      },
    };
    let newObj = {
      ...obj,
      details: {
        ...obj.details,
        total: obj.details.rate * details.quantity,
      },
    };

    let cartData = JSON.parse(localStorage.getItem("cart")) || [];

    cartData.push(newObj);

    localStorage.setItem("cart", JSON.stringify(cartData));
    handleClose();
    setCartSize(getFromCart());
    setCart(true);
    setTimeout(() => {
      setCart(false);
    }, 2000);
  };

  return (
    <>
      {cart && (
        <Toast>
          <ToastHeader icon="success">{name}</ToastHeader>
          <ToastBody>
            {details.quantity} Pizza added to the Cart Successfully
          </ToastBody>
        </Toast>
      )}
      <Row>
        <Col>
          <Card>
            <Row>
              <Col md="4">
                <CardImg top src={img_url} alt="Card image cap" />
              </Col>
              <Col md="8">
                <CardBody>
                  <CardTitle tag="h5">{name}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    Rating : {rating}
                  </CardSubtitle>
                  {type ? (
                    <div className="veg"> Veg </div>
                  ) : (
                    <div className="nv">Non-Veg</div>
                  )}
                  <CardText>Price : {price}</CardText>
                  <CardText>{description}</CardText>
                  <CardLink onClick={handleShow}>Add to Cart</CardLink>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <PizzaBooking
        {...props}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        toppingsList={toppingsList}
        sizeList={sizeList}
        name={name}
        handleClose={handleClose}
        show={show}
      />
    </>
  );
};

export default PizzaCard;
