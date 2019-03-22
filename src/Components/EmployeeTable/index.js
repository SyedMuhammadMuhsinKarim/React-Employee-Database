import React, { Component } from "react";
import Button from "../Button/";

const EmployeeTable = ({ pattern, onEdit, onDismiss, isSearched, list }) => (
  <table className="mx-auto responsive table">
    <tbody>
      <tr>
        <th scope="col">اندراج</th>
        <th scope="col">نام</th>
        <th scope="col">تنخواہ</th>
        <th scope="col">عمر</th>
        <th scope="col">ایڈیٹ</th>
        <th scope="col">مٹاو</th>
      </tr>
      {list.filter(isSearched(pattern)).map((item, index) => {
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            {/* <td>{item.id}</td> */}
            <td itemScope="row">{item.employee_name}</td>
            <td>{item.employee_salary}</td>
            <td>{item.employee_age}</td>
            <td>
              <Button className="btn btn-warning" onClick={() => onEdit(index)}>
                ایڈیٹ کریں
              </Button>
            </td>
            <td>
              <Button
                className="btn btn-danger"
                onClick={() => onDismiss(item.id)}
              >
                مٹائیں
              </Button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default EmployeeTable;
