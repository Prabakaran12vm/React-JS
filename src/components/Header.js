import { useState } from 'react'
import logo from '../../images/logo.png'
const Header = ()=>{
    const[loginBtn,setauth]  =useState("Login") 
    return (
    
    <div className="header">
        <div className="logo-container">
            <img className="logo"
            src={logo}
            />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Cart</li>
          
            <button className='login' onClick={()=>{
            loginBtn ==="Login"
            ? setauth("Logout")
            : setauth("Login");
        }}>{loginBtn}</button>
          </ul>
        </div>
    </div>
)
}
export default Header;