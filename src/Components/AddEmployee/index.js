import React, { Component } from "react";

const EmployeeAdd = ({
  onChangeName,
  EmployeeNameValue,
  onChangeSalary,
  EmployeeSalaryValue,
  onChangeAge,
  EmployeeAgeValue,
  currentIndex,
  listLength,
  addItem,
  updateItem,
  cancelItem
}) => (
  <div className="container">
    <form className="">
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Employee Name"
          onChange={onChangeName}
          value={EmployeeNameValue}
        />
      </div>

      <div className="form-group">
        <input
          className="form-control"
          type="number"
          placeholder="Employee Age"
          onChange={onChangeAge}
          value={EmployeeAgeValue}
        />
      </div>

      <div className="form-group">
        <input
          className="form-control"
          type="number"
          placeholder="Employee Salary"
          onChange={onChangeSalary}
          value={EmployeeSalaryValue}
        />
      </div>
      {currentIndex === listLength ? (
        <div className="form-group">
          <input
            className="form-control btn btn-info"
            type="submit"
            onClick={addItem}
            value="Submit"
          />
        </div>
      ) : (
        <div>
          <div className="form-group">
            <input
              className="form-control btn btn-warning"
              type="submit"
              onClick={updateItem}
              value="Update"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control btn btn-danger"
              type="submit"
              onClick={cancelItem}
              value="Cancel"
            />
          </div>
        </div>
      )}
    </form>
  </div>
);

export default EmployeeAdd;
