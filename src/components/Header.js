//Header for Home Page
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/AuthService";
import { AuthContext } from "../context/AuthContext";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";

function Header() {
  const { isAuthenticated, user, setIsAuthenticated, setUser } =
    useContext(AuthContext);

  const onClickLogoutHandler = () => {
    AuthService.logout().then((data) => {
      if (data.success) {
        setUser(data.user);
        setIsAuthenticated(false);
      }
    });
  };

  const unauthenticatedHeader = () => {
    return (
      <>
        <div className="header-links">
          <ElectricBoltIcon />
          <Link to="#" id="logo-link">
            Every Volt
          </Link>
          <Link to="#">Locations</Link>
        </div>

        <div className="header-links">
          <Link to="/user/register" id="signup-link">
            Sign Up
          </Link>
          <Link to="/user/login">Log In</Link>
        </div>
      </>
    );
  };

  const authenticatedHeader = () => {
    return (
      <>
        <div className="header-links">
          <ElectricBoltIcon />
          <Link to="#" id="logo-link">
            Every Volt
          </Link>
          <Link to="#">Locations</Link>
        </div>

        <div className="header-links">
          <Link to="#" id="signup-link">
            My Account
          </Link>
          <Link to="/" onClick={onClickLogoutHandler}>
            Logout
          </Link>
        </div>
      </>
    );
  };

  return (
    <div className="header">
      {!isAuthenticated ? unauthenticatedHeader() : authenticatedHeader()}
    </div>

  );
}

export default Header;
