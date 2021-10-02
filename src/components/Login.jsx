import React, { useState } from "react";
import { loginUser } from "../api";
import { storeToken, storeUser } from "../auth";

const Login = ({ setIsLoggedIn, setIsLoading }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="auth-component-main-container">
      <form
        id="login"
        onSubmit={async (event) => {
          event.preventDefault();
          setIsLoading(true);
          try {
            const { data } = await loginUser(userName, password);
            storeToken(data.token);
            storeUser(userName);
            setIsLoggedIn(true);
          } catch (error) {
            console.log(error);
          } finally {
            setIsLoading(false);
          }
        }}
      >
        <fieldset className="auth-component-input">
          <label htmlFor="userName">UserName :</label>
          <input
            id="userName"
            type="text"
            placeholder="Enter UserName"
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          ></input>
        </fieldset>
        <fieldset className="auth-component-input">
          <label htmlFor="password">User Password :</label>
          <input
            id="password"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          ></input>
        </fieldset>
        <button className="ui button">Login</button>
      </form>
    </div>
  );
};
export default Login;
