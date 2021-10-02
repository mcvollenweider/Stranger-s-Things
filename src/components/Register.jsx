import React, { useState } from "react";
import { registerUser } from "../api";
import { storeToken, storeUser } from "../auth";
import { Button } from 'semantic-ui-react'

const Register = ({ setIsLoggedIn, setIsLoading }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="auth-component-main-container">
      <form
        id="register"
        onSubmit={async (event) => {
          event.preventDefault();
          setIsLoading(true);
          try {
            const { data } = await registerUser(userName, password);
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
          <label htmlFor="userName">Create Username :</label>
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
          <label htmlFor="password">Create Password :</label>
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
        <button className="ui button">Register</button>
      </form>
    </div>
  );
};
export default Register;
