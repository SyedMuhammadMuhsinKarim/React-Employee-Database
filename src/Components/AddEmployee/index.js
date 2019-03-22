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
          placeholder="ملازم کا نام"
          onChange={onChangeName}
          value={EmployeeNameValue}
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="number"
          placeholder="ملازم کی تنخواہ"
          onChange={onChangeSalary}
          value={EmployeeSalaryValue}
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="number"
          placeholder="ملازم کی عمر"
          onChange={onChangeAge}
          value={EmployeeAgeValue}
        />
      </div>
      {currentIndex === listLength ? (
        <div className="form-group">
          <input
            className="form-control btn btn-info"
            type="submit"
            onClick={addItem}
            value="شامل کریں"
          />
        </div>
      ) : (
        <div>
          <div className="form-group">
            <input
              className="form-control btn btn-warning"
              type="submit"
              onClick={updateItem}
              value="اپڈیٹ"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control btn btn-danger"
              type="submit"
              onClick={cancelItem}
              value="منسوخ"
            />
          </div>
        </div>
      )}
    </form>
  </div>
);

export default EmployeeAdd;
