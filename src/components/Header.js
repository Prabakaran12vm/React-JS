import { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [loginBtn, setauth] = useState("Login");

  return (
    <div className="flex justify-between shadow-md">
      <div className="logo-container">
        <img className="w-20" src={logo} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
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
