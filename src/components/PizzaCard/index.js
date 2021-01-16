import React, { useEffect, useState } from "react";

import "./style.css";

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
} from "reactstrap";
import PizzaBooking from "../PizzaBooking";
import { useHistory } from "react-router-dom";

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
    id,
    getFromCart,
    setCartSize
  } = props;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sizeList = size && size[0].items.map((entry) => entry.size);

  const toppingsList = toppings && toppings[0].items.map((entry) => entry.name);

  const [details, setDetails] = useState({ toppings: [], addons: [] });

  const page = useHistory();

  const goToCart = () => {
    page.push("/cart");
  };

  const handleChange = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);

    if (e.target.name.localeCompare("addon") === 0) {
      setDetails({
        addons: value,
      });
    }
    if (e.target.name.localeCompare("top") === 0) {
      setDetails({
        toppings: value,
      });
    }
  };
  useEffect(() => {
    const foundItem = findItem(id);
    setFound(foundItem);
  }, [id]);

  const handleSubmit = () => {
    let obj = {
      id,
      name,
      price,
      details,
      quantity: 1,
    };
    let cartData = JSON.parse(localStorage.getItem("cart"));
    const foundIndex =
      cartData &&
      cartData.findIndex((entry) => parseInt(entry.id) === parseInt(id));
    const foundData =
      cartData && cartData.find((entry) => parseInt(entry.id) === parseInt(id));

    if (!cartData) {
      let arr = [];
      arr.push(obj);
      cartData = arr;
    } else if (foundIndex > -1) {
      let newObj = {
        ...foundData,
        quantity: foundData.quantity + 1,
        price: foundData.price + foundData.price,
      };
      cartData[foundIndex] = newObj;
    } else {
      cartData.push(obj);
    }
    localStorage.setItem("cart", JSON.stringify(cartData));
    setFound(true);
    handleClose();
    goToCart();
  };

  const findItem = (id) => {
    const cartData = JSON.parse(localStorage.getItem("cart"));
    if (!cartData) {
      return false;
    }
    const foundIndex = cartData.findIndex(
      (entry) => parseInt(entry.id) === parseInt(id)
    );
    if (foundIndex >= 0) {
      return true;
    }
    return false;
  };

  const [found, setFound] = useState(findItem(id));
  const handleDelete = (id) => {
    let cartData = JSON.parse(localStorage.getItem("cart"));
    const foundIndex =
      cartData &&
      cartData.findIndex((entry) => parseInt(entry.id) === parseInt(id));
    const foundData =
      cartData && cartData.find((entry) => parseInt(entry.id) === parseInt(id));
    if (!foundData) {
      return;
    }
    if (foundData.quantity > 1) {
      foundData.quantity -= 1;
    } else {
      cartData.splice(foundIndex, 1);
      setFound(false);
    }
   
    localStorage.setItem("cart", JSON.stringify(cartData));
    setCartSize(getFromCart());
  };

  return (
    <>
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
                  {found && (
                    <CardLink onClick={() => handleDelete(id)}>Remove</CardLink>
                  )}
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
