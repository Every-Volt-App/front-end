import React, { useState, useRef, useEffect } from "react";
import AuthService from "../../services/AuthService";
import Message from "./Message";
import "./User.css";

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
    <main className="wrapper">
      <figure>
        <picture>
          <img src="https://i.imgur.com/vYiXyNg.jpg?1" alt="car on road"
          />
        </picture>
      </figure>
      <form onSubmit={onSubmit}>
        <div className="headline">
          <h3>Create an account</h3>
          <p>Save your favorite charging stations and more.</p>
        </div>
        <label className="text-small-uppercase" htmlFor="username"></label>
        <input
          className="text-body"
          type="username"
          name="username"
          value={user.username}
          onChange={onChange}
          placeholder="Username"
          required
        />
        <label className="text-small-uppercase" htmlFor="password"> </label>
        <input
          className="text-body"
          type="password"
          name="password"
          value={user.password}
          onChange={onChange}
          placeholder="Password"
          required
        />
        <label className="dropdown" htmlFor="role"> 
          <div className="select">
            <select
              name="role"
              value={user.role}
              onChange={onChange}
              defaultValue="user"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </label>
        <button className="text-small-uppercase" type="submit">Sign Up</button>
      </form>
      {message ? <Message message={message} /> : null}
    </main>
  );
};

export default Signup;
