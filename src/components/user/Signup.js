import React, { useState, useRef, useEffect } from "react";
import AuthService from "../../services/AuthService";
import Message from "./Message";

const Signup = (props) => {
  const [user, setUser] = useState({ username: "", password: "", role: "" });
  const [message, setMessage] = useState(null);
  let timerID = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(timerID);
    };
  }, []);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setUser({ username: "", password: "", role: "" });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    AuthService.signup(user).then((data) => {
      const { message } = data;
      setMessage(message);
      resetForm();
      if (!message.msgError) {
        timerID = setTimeout(() => {
          props.history.push("/login");
        }, 2000);
      }
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h3>Please Sign Up</h3>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={onChange}
          placeholder="Enter Username"
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={onChange}
          placeholder="Enter Password"
        />
        <label htmlFor="role">Role: </label>
        <input
          type="text"
          name="role"
          value={user.role}
          onChange={onChange}
          placeholder="Enter role (admin/user)"
        />
        <button type="submit">Sign Up</button>
      </form>
      {message ? <Message message={message} /> : null}
    </div>
  );
};

export default Signup;
