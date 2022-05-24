import React, { useState } from "react";

const LogInForm = () => {
  const initialState = { username: "", password: "" };
  const [logInState, setLogInState] = useState(initialState);

  const handleChange = (event) => {
    setLogInState({ ...logInState, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(logInState);
    setLogInState(initialState);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          onChange={handleChange}
          value={logInState.username}
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          onChange={handleChange}
          value={logInState.password}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LogInForm;
