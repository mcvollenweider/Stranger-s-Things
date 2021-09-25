import React, { useState } from "react";
import { loginUser } from "../api";
import { storeToken } from "../auth";

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="auth-component-main-container">
      <form
        id="login"
        onSubmit={async (e) => {
          e.preventDefault();

          try {
            const { data: token } = await loginUser(userName, password);
            storeToken(token);

            setUserName("");
            setPassword("");
          } catch (err) {
            console.log(err);
          }
        }}
      >
        <fieldset className="auth-component-input">
          <label htmlFor="userName">Username</label>
          <input
            id="userName"
            type="text"
            placeholder="enter username"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </fieldset>

        <fieldset className="auth-component-input">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </fieldset>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
