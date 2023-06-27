import React, { Component, Fragment } from "react";
import { Button, Modal, Table } from "react-bootstrap";

export class DoneOrdersList extends Component {
  render() {
    const {
      doneOrders,
      returnOrder,
      confirmDoneReturn,
      closeConfirmReturnModal,
      returnDoneOrder,
    } = this.props;
    return (
      <Fragment>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Phone number</th>
              <th>Order name</th>
              <th>Order description</th>
              <th>Price</th>
              <th>Tailor</th>
              <th>Priority</th>
              <th className="text-end">Actions</th>
            </tr>
          </thead>
          <tbody>
            {doneOrders.map(
              (
                {
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
                index
              ) => (
                <tr key={id}>
                  <td>{index + 1}</td>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  <td>{phoneNumber}</td>
                  <td>{orderTitle}</td>
                  <td>{orderDescription}</td>
                  <td>{price}</td>
                  <td>{tailor}</td>
                  <td>{priority ? "High" : "Low"}</td>
                  <td className="text-end">
                    <button
                      className="btn btn-danger"
                      onClick={() => returnOrder(id)}
                    >
                      Return order
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
        <Modal show={confirmDoneReturn} onHide={closeConfirmReturnModal}>
          <Modal.Header closeButton>
            <Modal.Title>Really ?</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeConfirmReturnModal}>
              Close
            </Button>
            <Button variant="primary" onClick={returnDoneOrder}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default DoneOrdersList;
