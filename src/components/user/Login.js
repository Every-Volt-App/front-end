import React, { useState, useContext } from "react";
import "./User.css";
import AuthService from "../../services/AuthService";
import Message from "./Message";
import { AuthContext } from "../../context/AuthContext";

const Login = (props) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    AuthService.login(user).then((data) => {
      console.log(data);
      const { isAuthenticated, user, message } = data;
      if (isAuthenticated) {
        authContext.setUser(user);
        authContext.setIsAuthenticated(isAuthenticated);
        // props.history.push("/todos");
      } else setMessage(message);
    });
  };

  return (
    <main className="wrapper">
      <figure>
        <picture>
          <img className="user-image" src="https://i.imgur.com/cuerw2V.png" alt="car driving through mountains" />
        </picture>
      </figure>

      <form onSubmit={onSubmit}>
        <div className="headline">
          <h3> Log In</h3>
          <p>Enjoy our exclusive perks and benefits.</p>
        </div>
        <label className="text-small-uppercase" htmlFor="username"></label>
        <input
          className="text-body"
          type="username"
          name="username"
          onChange={onChange}
          placeholder="Username"
          required
        />
        <label className="text-small-uppercase" htmlFor="password"></label>
        <input
          className="text-body"
          type="password"
          name="password"
          onChange={onChange}
          placeholder="Password"
          required
        />
        <button className="text-small-uppercase" type="submit">Log in</button>
      </form>
      {message ? <Message message={message} /> : null}
    </main>
  );
};

export default Login;
