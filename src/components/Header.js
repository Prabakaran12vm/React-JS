import { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [loginBtn, setauth] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>

          <button
            className="login"
            onClick={() => {
              loginBtn === "Login" ? setauth("Logout") : setauth("Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
