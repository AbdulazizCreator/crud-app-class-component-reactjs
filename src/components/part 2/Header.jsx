import React, { Component } from "react";
import { Button, Container, Form, InputGroup, Modal } from "react-bootstrap";
import { tailors } from "../../data/tailors";

export class Header extends Component {
  render() {
    const {
      show,
      openModal,
      closeModal,
      order: {
        firstName,
        lastName,
        phoneNumber,
        orderTitle,
        orderDescription,
        price,
        tailor,
        priority,
        id,
      },
      validated,
      submit,
      handleChange,
      handleCheck,
      freeOrder,
    } = this.props;
    return (
      <Container>
        <InputGroup className="my-3">
          <Form.Control placeholder="Searching" />
          <InputGroup.Text>
            <Form.Select>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </InputGroup.Text>
          <Button
            variant="outline-primary"
            onClick={() => {
              openModal();
              freeOrder();
            }}
          >
            Create order
          </Button>
        </InputGroup>
        <Modal show={show} onHide={closeModal}>
          <Form noValidate validated={validated} onSubmit={submit}>
            <Modal.Header closeButton>
              <Modal.Title>Add order</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group className="mb-3">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  value={firstName}
                  name="firstName"
                  required
                  type="text"
                  placeholder="First name"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please fill this field !
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  value={lastName}
                  name="lastName"
                  required
                  type="text"
                  placeholder="Last name"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please fill this field !
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  value={phoneNumber}
                  name="phoneNumber"
                  required
                  type="text"
                  placeholder="Phone number"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please fill this field !
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Order title</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  value={orderTitle}
                  name="orderTitle"
                  required
                  type="text"
                  placeholder="Order title"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please fill this field !
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Order description</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  value={orderDescription}
                  name="orderDescription"
                  required
                  as="textarea"
                  type="text"
                  placeholder="Order description"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please fill this field !
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  value={price}
                  name="price"
                  required
                  type="number"
                  placeholder="Price"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please fill this field !
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Select tailor</Form.Label>
                <Form.Select
                  onChange={handleChange}
                  value={tailor}
                  name="tailor"
                >
                  {tailors.map((tlr) => (
                    <option key={tlr} value={tlr}>
                      {tlr}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please fill this field !
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check
                  onChange={handleCheck}
                  value={priority}
                  name="priority"
                  label="Priority"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please fill this field !
                </Form.Control.Feedback>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal}>
                Close
              </Button>
              <Button type="submit" variant="primary">
                {id ? "Save" : "Add"} order
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </Container>
    );
  }
}

export default Header;
