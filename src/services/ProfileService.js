// const URL = "http://localhost:4000";
const URL = "https://every-volt-back.herokuapp.com";

export default {
  showProfile: () => {
    return fetch(`${URL}/user/profile/:id`).then((response) => {
      if (response.status !== 401) {
        return response.json().then((data) => data);
      } else return { message: { msgBody: "UnAuthorized", msgError: true } };
    });
  },
  createProfile: (profile) => {
    return fetch(`${URL}/user/profile`, {
      method: "post",
      body: JSON.stringify(profile),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.status !== 401) {
        return response.json().then((data) => data);
      } else return { message: { msgBody: "UnAuthorized" }, msgError: true };
    });
  },
  updateProfile: (profile) => {
    return fetch(`${URL}/user/profile/:id`, {
      method: "put",
      body: JSON.stringify(profile),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.status !== 401) {
        return response.json().then((data) => data);
      } else return { message: { msgBody: "UnAuthorized" }, msgError: true };
    });
  },
  deleteProfile: (profile) => {
    return fetch(`${URL}/user/profile/:id`, {
      method: "delete",
      body: JSON.stringify(profile),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.status !== 401) {
        return response.json().then((data) => data);
      } else return { message: { msgBody: "UnAuthorized" }, msgError: true };
    });
  },
};
