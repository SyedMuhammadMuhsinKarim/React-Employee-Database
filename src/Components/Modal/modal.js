import { Modal, Button } from "react-bootstrap";
import AddEmployee from "../AddEmployee";

const PopUpModal = (
  show,
  handleClose,
  getEmployeeAge,
  getEmployeeName,
  getEmployeeSalary,
  EmployeeName,
  EmployeeAge,
  EmployeeSalary,
  list,
  add,
  update,
  cancel
) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{}</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <AddEmployee
        onChangeAge={getEmployeeAge}
        onChangeName={getEmployeeName}
        onChangeSalary={getEmployeeSalary}
        EmployeeNameValue={EmployeeName}
        EmployeeSalaryValue={EmployeeSalary}
        EmployeeAgeValue={EmployeeAge}
        currentIndex={current_index}
        listLength={list.length}
        addItem={add}
        updateItem={update}
        cancelItem={cancel}
      />
    </Modal.Body>

    <Modal.Footer>
      <Button variant="secondary" onClick={this.handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={this.handleClose}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
);

export default PopUpModal;
