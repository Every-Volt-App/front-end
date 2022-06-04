import React from "react";
import Header from "../Header";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Profile() {
  return (
    <div>
      <div className=".header-nav">
        <Header />
      </div>
      <div className="profile-hero">
        <AccountCircleIcon sx={{ fontSize: 150 }} className="img" />
      </div>
      <section className="profile-info">
        <div className="title-info">
          <h1>Hello, User</h1>
          <button className="btn">Edit Profile</button>
        </div>
        <div className="info-boxes">
          <div className="info-box">
            <h2>Personal Info</h2>
          </div>
          <div className="info-box">
            <h2>Favorite Stations</h2>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Profile;
