//once sign up is clicked, direct here
import React, { useState, useContext, useEffect } from "react";
import ProfileService from "../../services/ProfileService";
import Message from "../user/Message";
import "./Profile.css"

const CreateProfile = (props) => {
  const [profile, setProfile] = useState({
    profileImage: "",
    primaryCar: { make: "", model: "", connectionType: "" },
    primaryAddress: {
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zipcode: "",
    },
  });
  // const [profileImage, setProfileImage] = useState({ profileImage: "" });
  // const [car, setCar] = useState({ make: "", model: "", connectionType: "" });
  // const [address, setAddress] = useState({
  //   addressLine1: "",
  //   addressLine2: "",
  //   city: "",
  //   state: "",
  //   zipcode: "",
  // });

  const [message, setMessage] = useState(null);

  // useEffect(() => {
  //   ProfileService.createProfile(profile).then((data) => {
  //     setProfileImage(data.profile);
  //     setCar(data.profile);
  //     setAddress(data.profile);
  //     console.log(data.profile);
  //   });
  // }, []);

  const onChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setProfile({
      profileImage: "",
      primaryCar: {
        make: "",
        model: "",
        connectionType: "",
      },
      primaryAddress: {
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        zipcode: "",
      },
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    ProfileService.createProfile(profile).then((data) => {
      const { message } = data;
      setMessage(message);
      resetForm();
    });
  };

  return (
    <main className="profile-wrapper">
      <figure>
        <picture>
          <img
            className="user-image"
            src="https://i.imgur.com/lGIaMB9.png"
            alt="car on road"
          />
        </picture>
      </figure>
      <form className="profile-form" onSubmit={onSubmit}>
        <div className="profile-headline">
          <h3>Create a Profile</h3>
        </div>
        <label className="profile-text-small-uppercase" htmlFor="profileImage"></label>
        <input
          className="profile-text-body"
          type="text"
          name="profileImage"
          value={profile.profileImage}
          onChange={onChange}
          placeholder="Profile Image URL"
        />
        <h4>Primary Car Info</h4>
        <label className="profile-text-small-uppercasee" htmlFor="make"></label>
        <input
          className="profile-text-body"
          type="text"
          name="make"
          value={profile.make}
          onChange={onChange}
          placeholder="Make"
        />
        <label className="profile-text-small-uppercase" htmlFor="model"></label>
        <input
          className="profile-text-body"
          type="text"
          name="model"
          value={profile.model}
          onChange={onChange}
          placeholder="Model"
        />
        <label className="dropdown" htmlFor="connectionType">
          <div className="car-select">
            <select
              name="connectionType"
              value={profile.connectionType}
              onChange={onChange}
            >
              <option value="" selected>
                Connection
              </option>
              <option value="Avcon Connector">Avcon Connector</option>
              <option value="BS1363 3 Pin 13 Amp">BS1363 3 Pin 13 Amp</option>
              <option value="CCS (Type 1)">CCS (Type 1)</option>
              <option value="CCS (Type 2)">CCS (Type 2)</option>
              <option value="CEE 5 Pin">CEE 5 Pin</option>
              <option value="CHAdeMO">CHAdeMO</option>
              <option value="Europlug 2-Pin (CEE 7/16)">
                Europlug 2-Pin (CEE 7/16)
              </option>
              <option value="LP Inductive">LP Inductive</option>
              <option value="NEMA 14-30">NEMA 14-30</option>
              <option value="NEMA 14-50">NEMA 14-50</option>
              <option value="NEMA 5-15R">NEMA 5-15R</option>
              <option value="NEMA 5-20R">NEMA 5-20R</option>
              <option value="NEMA 6-15">NEMA 6-15</option>
              <option value="NEMA 6-20">NEMA 6-20</option>
              <option value="NEMA TT-30R">NEMA TT-30R</option>
              <option value="SP Inductive">SP Inductive</option>
              <option value="Tesla (Model S/X)">Tesla (Model S/X)</option>
              <option value="Tesla (Roadster)">Tesla (Roadster)</option>
              <option value="Tesla Supercharger">Tesla Supercharger</option>
              <option value="Type 1 (J1772)">Type 1 (J1772)</option>
              <option value="Type I (AS 3112)">Type I (AS 3112)</option>
              <option value="Wireless Charging">Wireless Charging</option>
              <option value="(Unknown)">(Unknown)</option>
            </select>
          </div>
        </label>
        <h4>Primary Address Info</h4>
        <label className="profile-text-small-uppercase" htmlFor="addressLine1"></label>
        <input
          className="profile-text-body"
          type="text"
          name="addressLine1"
          value={profile.addressLine1}
          onChange={onChange}
          placeholder="Address (Line 1)"
        />
        <label className="profile-text-small-uppercase" htmlFor="addressLine2"></label>
        <input
          className="profile-text-body"
          type="text"
          name="addressLine2"
          value={profile.addressLine2}
          onChange={onChange}
          placeholder="Address (Line 2)"
        />
        <label className="profile-text-small-uppercase" htmlFor="city"></label>
        <input
          className="profile-text-body"
          type="text"
          name="city"
          value={profile.city}
          onChange={onChange}
          placeholder="City"
        />
        <label className="dropdown" htmlFor="state">
          <div className="state-select">
            <select name="state" value={profile.state} onChange={onChange}>
              <option value="" selected>
                State
              </option>
              <option value="Alaska">AK</option>
              <option value="Alabama">AL</option>
              <option value="Arkansas">AR</option>
              <option value="Arizona">AZ</option>
              <option value="California">CA</option>
              <option value="Colorado">CO</option>
              <option value="Connecticut">CT</option>
              <option value="Canal Zone">CZ</option>
              <option value="District of Columbia">DC</option>
              <option value="Delaware">DE</option>
              <option value="Florida">FL</option>
              <option value="Georgia">GA</option>
              <option value="Guam">GU</option>
              <option value="Hawaii">HI</option>
              <option value="Iowa">IA</option>
              <option value="Idaho">ID</option>
              <option value="Illinois">IL</option>
              <option value="Indiana">IN</option>
              <option value="Kansas">KS</option>
              <option value="Kentucky">KY</option>
              <option value="Louisiana">LA</option>
              <option value="Massachusetts">MA</option>
              <option value="Maryland">MD</option>
              <option value="Maine">ME</option>
              <option value="Michigan">MI</option>
              <option value="Minnesota">MN</option>
              <option value="Missouri">MO</option>
              <option value="Mississippi">MS</option>
              <option value="Montana">MT</option>
              <option value="North Carolina">NC</option>
              <option value="North Dakota">ND</option>
              <option value="Nebraska">NE</option>
              <option value="New Hampshire">NH</option>
              <option value="New Jersey">NJ</option>
              <option value="New Mexico">NM</option>
              <option value="Nevada">NV</option>
              <option value="New York">NY</option>
              <option value="Ohio">OH</option>
              <option value="Oklahoma">OK</option>
              <option value="Oregon">OR</option>
              <option value="Pennsylvania">PA</option>
              <option value="Puerto Rico">PR</option>
              <option value="Rhode Island">RI</option>
              <option value="South Carolina">SC</option>
              <option value="South Dakota">SD</option>
              <option value="Tennessee">TN</option>
              <option value="Texas">TX</option>
              <option value="Utah">UT</option>
              <option value="Virginia">VA</option>
              <option value="Virgin Islands">VI</option>
              <option value="Vermont">VT</option>
              <option value="Washington">WA</option>
              <option value="Wisconsin">WI</option>
              <option value="West Virginia">WV</option>
              <option value="Wyoming">WY</option>
            </select>
          </div>
        </label>
        <label className="profile-text-small-uppercase" htmlFor="zipcode">
          <input
            className="profile-text-body"
            type="text"
            name="zipcode"
            value={profile.zipcode}
            onChange={onChange}
            placeholder="Zipcode"
          />
        </label>
        <button className="profile-text-small-uppercase btn7" type="submit">
          Create Profile
        </button>
      </form>
      {message ? <Message message={message} /> : null}
    </main>
  );
};
export default CreateProfile;
