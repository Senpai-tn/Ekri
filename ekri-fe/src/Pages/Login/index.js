import React from "react";
import "./style.css";
function Login() {
  return (
    <section>
      <div
        className="color"
        style={{
          background: "#ff359b",
        }}
      ></div>
      <div
        className="color"
        style={{
          height: 500,
          width: 500,
          background: "#fffd87",
          bottom: "-150px",
          left: 100,
        }}
      ></div>
      <div
        className="color"
        style={{
          height: 500,
          width: 500,
          background: "#00d2ff",
          bottom: 50,
          right: 300,
        }}
      ></div>
      <div className="box">
        <div className="container">
          <div className="form">
            <h1>Login form</h1>
            <input />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
