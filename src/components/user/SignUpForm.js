import React, { useState } from "react";

const SignUpForm = () => {
  const initialState = { username: "", email: "", password: "" };
  const [signUpState, setSignUpState] = useState(initialState);

  const handleChange = (event) => {
    setSignUpState({ ...signUpState, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(signUpState);
    setSignUpState(initialState);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          onChange={handleChange}
          value={signUpState.username}
        />

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          onChange={handleChange}
          value={signUpState.email}
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          onChange={handleChange}
          value={signUpState.password}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
