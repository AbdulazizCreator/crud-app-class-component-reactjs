import { Component, Fragment } from "react";
import { Badge, Container, Tab, Tabs } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

import Header from "../components/part 2/Header";
import OrdersList from "../components/part 2/OrdersList";
import DoneOrdersList from "../components/part 2/DoneOrdersList";

import { tailors } from "../data/tailors";
import { DONE_ORDERS, ORDERS } from "../const";

const orderFree = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  orderTitle: "",
  orderDescription: "",
  price: "",
  tailor: tailors[0],
  priority: false,
};

class Part2 extends Component {
  state = {
    show: false,
    orders: JSON.parse(localStorage.getItem(ORDERS)) || [],
    doneOrders: JSON.parse(localStorage.getItem(DONE_ORDERS)) || [],
    order: { ...orderFree },
    validate: false,
    confirmDone: false,
    confirmDoneReturn: false,
    selected: null,
  };
  render() {
    const {
      show,
      orders,
      doneOrders,
      order,
      validated,
      confirmDone,
      confirmDoneReturn,
      selected,
    } = this.state;

    const closeModal = () => {
      this.setState({ show: false });
    };
    const openModal = () => {
      this.setState({ show: true });
    };
    const closeConfirmModal = () => {
      this.setState({ confirmDone: false });
    };
    const openConfirmModal = () => {
      this.setState({ confirmDone: true });
    };
    const closeConfirmReturnModal = () => {
      this.setState({ confirmDoneReturn: false });
    };
    const openConfirmReturnModal = () => {
      this.setState({ confirmDoneReturn: true });
    };
    const submit = (e) => {
      const form = e.currentTarget;
      this.setState({ validated: true });
      e.preventDefault();
      if (form.checkValidity()) {
        let newOrders;
        if (order.id) {
          newOrders = orders.map((el) => {
            el.id === order.id && (el = order);
            return order;
          });
        } else {
          newOrders = [...orders, { ...order, id: uuidv4() }];
        }
        this.setState({
          orders: newOrders,
          order: { ...orderFree },
          validated: false,
        });
        localStorage.setItem(ORDERS, JSON.stringify(newOrders));
        closeModal();
      }
    };

    const handleChange = (e) => {
      let newOrder = { ...order, [e.target.name]: e.target.value };
      this.setState({ order: newOrder });
    };

    const handleCheck = (e) => {
      let newOrder = { ...order, [e.target.name]: e.target.checked };
      this.setState({ order: newOrder });
    };

    const editOrder = (id) => {
      openModal();
      let order = orders.find((el) => el.id === id);
      this.setState({ order });
    };

    const freeOrder = () => {
      this.setState({
        order: { ...orderFree },
        validated: false,
      });
    };

    const doneOrder = (id) => {
      openConfirmModal();
      this.setState({ selected: id });
    };

    const confirmDoneOrder = () => {
      console.log("confirmDoneOrder");
      let order = orders.find((el) => el.id === selected);
      let newOrders = orders.filter((el) => el.id !== selected);
      let newDoneOrders = [...doneOrders, order];
      this.setState({ orders: newOrders, doneOrders: newDoneOrders });
      localStorage.setItem(ORDERS, JSON.stringify(newOrders));
      localStorage.setItem(DONE_ORDERS, JSON.stringify(newDoneOrders));
      closeConfirmModal();
    };

    const returnOrder = (id) => {
      openConfirmReturnModal();
      this.setState({ selected: id });
    };

    const returnDoneOrder = () => {
      let order = doneOrders.find((el) => el.id === selected);
      let newDoneOrders = doneOrders.filter((el) => el.id !== selected);
      let newOrders = [...orders, order];
      this.setState({ orders: newOrders, doneOrders: newDoneOrders });
      localStorage.setItem(ORDERS, JSON.stringify(newOrders));
      localStorage.setItem(DONE_ORDERS, JSON.stringify(newDoneOrders));
      closeConfirmReturnModal();
    };

    const headerProps = {
      show,
      closeModal,
      openModal,
      order,
      validated,
      submit,
      handleChange,
      handleCheck,
      freeOrder,
    };

    const ordersListProps = {
      orders,
      editOrder,
      doneOrder,
      confirmDone,
      closeConfirmModal,
      confirmDoneOrder,
    };

    const doneOrdersListProps = {
      doneOrders,
      returnOrder,
      confirmDoneReturn,
      closeConfirmReturnModal,
      returnDoneOrder,
    };

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
            <Tab
              eventKey="all"
              title={
                <Fragment>
                  All orders {<Badge bg="warning">{orders.length}</Badge>}
                </Fragment>
              }
            >
              <OrdersList {...ordersListProps} />
            </Tab>
            <Tab
              eventKey="done"
              title={
                <Fragment>
                  Done orders {<Badge bg="warning">{doneOrders.length}</Badge>}
                </Fragment>
              }
            >
              <DoneOrdersList {...doneOrdersListProps} />
            </Tab>
          </Tabs>
        </Container>
      </Fragment>
    );
  }
}

export default Part2;
