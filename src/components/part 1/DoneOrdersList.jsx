import React, { Component, Fragment } from "react";
import { Table } from "react-bootstrap";

export class DoneOrdersList extends Component {
  render() {
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>First name</td>
              <td>Last name</td>
              <td>Phone number</td>
              <td>Order name</td>
              <td>Order description</td>
              <td>Price</td>
              <td>Tailor</td>
              <td>Priority</td>
            </tr>
          </tbody>
        </Table>
      </Fragment>
    );
  }
}

export default DoneOrdersList;
