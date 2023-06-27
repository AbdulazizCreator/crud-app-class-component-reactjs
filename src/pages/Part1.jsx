import { Component, Fragment } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";

import Header from "../components/part 1/Header";
import OrdersList from "../components/part 1/OrdersList";
import DoneOrdersList from "../components/part 1/DoneOrdersList";

class Part1 extends Component {
  state = {
    show: false,
  };
  render() {
    const { show } = this.state;
    const closeModal = () => {
      this.setState({ show: false });
    };
    const openModal = () => {
      this.setState({ show: true });
    };
    const headerProps = { show, closeModal, openModal };
    return (
      <Fragment>
        <Header {...headerProps} />
        <Container>
          <Tabs
            defaultActiveKey="all"
            id="justify-tab-example"
            className="mb-3"
            variant="pills"
            justify
          >
            <Tab eventKey="all" title="All orders">
              <OrdersList />
            </Tab>
            <Tab eventKey="done" title="Done orders">
              <DoneOrdersList />
            </Tab>
          </Tabs>
        </Container>
      </Fragment>
    );
  }
}

export default Part1;
