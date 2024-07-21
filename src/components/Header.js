import { useEffect, useState,useContext } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [loginBtn, setauth] = useState("Login");
  const data = useContext(UserContext)
  console.log(data)
  return (
    <div className="flex justify-between shadow-md   text-gray-600 font-semibold">
      <div className="logo-container ml-2">
        <Link to={"/"}><img className="w-20 hover:scale-[1.1]" src={logo} /></Link> 
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4 hover:text-orange-500">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:text-orange-500">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 hover:text-orange-500">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 hover:text-orange-500">
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
          <li className="px-4 text-green-600  hover:text-orange-500">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
