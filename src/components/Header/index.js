import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavbarText,
  Badge,
  Button,
} from "reactstrap";

const Header = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const [cartData, setCartData] = useState([]);
  
  const page = useHistory();
  
  const goToCart = () => {
     page.push("/cart");
  };

 

  // useEffect(()=>{
  //   setCartData(getFromCart())    
  // },[])

 
  
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Dominos Pizza</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar></Nav>
        <NavbarText>
          <Button variant="primary" onClick={goToCart}>
            Cart <Badge variant="light">{ props.cartSize}</Badge>
            <span className="sr-only">unread messages</span>
          </Button>
        </NavbarText>
      </Collapse>
    </Navbar>
  );
};

export default Header;
