import React, { Component } from "react";
import { Button, Container, Form, InputGroup, Modal } from "react-bootstrap";

export class Header extends Component {
  state = {
    validated: false,
  };
  render() {
    const { validated } = this.state;
    const { show, openModal, closeModal } = this.props;

    const handleSubmit = (e) => {
      const form = e.currentTarget;
      this.setState({ validated: true });
      e.preventDefault();
      if (form.checkValidity()) {
        closeModal();
      }
    };
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
          <Button variant="outline-primary" onClick={openModal}>
            Create order
          </Button>
        </InputGroup>
        <Modal show={show} onHide={closeModal}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Add order</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group className="mb-3">
                <Form.Label>First name</Form.Label>
                <Form.Control required type="text" placeholder="First name" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please fill this field !
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Last name</Form.Label>
                <Form.Control required type="text" placeholder="Last name" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please fill this field !
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone number</Form.Label>
                <Form.Control required type="text" placeholder="Phone number" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please fill this field !
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Order name</Form.Label>
                <Form.Control required type="text" placeholder="Order name" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please fill this field !
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Order description</Form.Label>
                <Form.Control
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
                <Form.Control required type="number" placeholder="Price" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please fill this field !
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Select tailor</Form.Label>
                <Form.Select>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please fill this field !
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check label="Priority" />
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
                Add order
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </Container>
    );
  }
}

export default Header;
