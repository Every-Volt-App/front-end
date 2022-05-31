//React component User to be exported to Charger
import React, { useEffect, useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Routes, Route } from "react-router-dom";

const User = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/user/login" element={<Login />} />
        <Route exact path="/user/register" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default User;
