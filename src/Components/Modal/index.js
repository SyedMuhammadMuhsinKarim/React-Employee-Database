import React, { Component } from "react";
import PopUpModal from "./modal";
import { Button } from "react-bootstrap";

class Modal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button>

        <PopUpModal
          show={this.state.show}
          handleClose={this.handleClose}
          onChangeAge={this.getEmployeeAge}
          onChangeName={this.getEmployeeName}
          onChangeSalary={this.getEmployeeSalary}
          EmployeeNameValue={EmployeeName}
          EmployeeSalaryValue={EmployeeSalary}
          EmployeeAgeValue={EmployeeAge}
          currentIndex={current_index}
          listLength={list.length}
          addItem={this.add}
          updateItem={this.update}
          cancelItem={this.cancel}
        />
      </div>
    );
  }
}

export default Modal;
