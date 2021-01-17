import { Button, Modal } from "react-bootstrap";
import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

const PizzaBooking = (props) => {
  const { sizeList, toppingsList, handleSubmit, handleChange } = props;

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FormGroup>
            <Label for="addon">Add-Ons</Label>
            <Input
              type="select"
              name="addon"
              id="addon"
              multiple
              onChange={(e) => handleChange(e)}
            >
              {sizeList &&
                sizeList.map((item, i) => {
                  return <option key={i}>{item}</option>;
                })}
            </Input>
          </FormGroup>
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
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PizzaBooking;
