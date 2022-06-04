//React component User to be exported to Charger
import React, { useEffect, useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import CreateProfile from "../profile/CreateProfile";
import Profile from "../profile/Profile";
import { Routes, Route } from "react-router-dom";

const User = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/user/login" element={<Login />} />
        <Route exact path="/user/signup" element={<Signup />} />
        <Route exact path="/user/addprofile" element={<CreateProfile />} />
        <Route exact path="/user/profile/:id" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default User;
