const URL = "http://localhost:4000";
// const URL = "https://every-volt-back.herokuapp.com";

export default {
  login: (user) => {
    return fetch(`${URL}/user/login`, {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status !== 401) return res.json().then((data) => data);
      else return { isAuthenticated: false, user: { username: "", role: "" } };
    });
  },
  signup: (user) => {
    return fetch(`${URL}/user/signup`, {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  },
  logout: () => {
    return fetch(`${URL}/user/logout`)
      .then((res) => res.json())
      .then((data) => data);
  },
  isAuthenticated: () => {
    return fetch(`${URL}/user/authenticated`).then((res) => {
      if (res.status !== 401) return res.json().then((data) => data);
      else return { isAuthenticated: false, user: { username: "", role: "" } };
    });
  },
};
