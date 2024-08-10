import { useEffect, useState, useContext } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [loginBtn, setauth] = useState("Login");
  const data = useContext(UserContext);
  // selector for subscribing
  const cartItem = useSelector((store) => store.cart.items);
  console.log(cartItem);
  return (
    <div className="flex justify-between shadow-md   text-gray-600 font-semibold">
      <div className="logo-container ml-2">
        <Link to={"/"}>
          <img className="w-20 hover:scale-[1.1]" src={logo} />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4 hover:text-orange-500">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:text-orange-500">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 hover:text-orange-500 font-bold" >
            <Link to="/cart">Cart - ({cartItem.length})</Link>
          </li>

          <button
            className="login"
            onClick={() => {
              loginBtn === "Login" ? setauth("Logout") : setauth("Login");
            }}
          >
            {loginBtn}
          </button>
          <li className="px-4 text-green-600  hover:text-orange-500">
            {data.loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
