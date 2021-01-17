import { Button, Modal } from "react-bootstrap";
import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import "./style.css";
const PizzaBooking = (props) => {
  const { sizeList, toppingsList, handleSubmit, handleChange } = props;

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Label>
            Add-Ons<span className="warning">*</span>
          </Label>
          {sizeList &&
            sizeList.map((item, i) => {
              return (
                <div key={i}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="radio"
                        name="addon"
                        value={item}
                        onChange={(e) => handleChange(e)}
                      />
                      {item}
                    </Label>
                  </FormGroup>
                </div>
              );
            })}

          <FormGroup>
            <Label for="top">Toppings</Label>
            <Input
              type="select"
              name="top"
              id="top"
              multiple
              onChange={(e) => handleChange(e)}
            >
              {toppingsList &&
                toppingsList.map((item, i) => {
                  return <option key={i}>{item}</option>;
                })}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleNumber">
              Quantity<span className="warning">*</span>
            </Label>
            <Input
              type="number"
              name="quantity"
              id="quantity"
              min="1"
              placeholder="Quantity should be greater than zero"
              onChange={(e) => handleChange(e)}
            />
          </FormGroup>
        </Form>
        <div className="warning">*Indicates a required field</div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          Add To Cart
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PizzaBooking;
