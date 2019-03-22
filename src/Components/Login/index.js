import React, { Component } from "react";
import swal from "sweetalert";

const Login = ({ onClick, onChangeEmail, onChangePass }) => {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <input
            className="form-control"
            type="email"
            placeholder="ای میل لکھیں"
            onChange={onChangeEmail}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            placeholder="پاسورڈ لکھیں"
            onChange={onChangePass}
          />
        </div>
        <div className="form-group">
          <input
            className="btn btn-primary btn-lg btn-block"
            type="submit"
            onClick={onClick}
            value="لاگ ان کریں"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
