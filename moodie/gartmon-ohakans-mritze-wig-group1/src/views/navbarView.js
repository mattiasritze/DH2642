import React from "react";
import { NavLink } from "react-router-dom";

export default
function NavbarView (props) {

function logOutACB() {
  props.logOut()
}

return(<nav className="dark:bg-neutral-900 border-b-2 border-white fixed w-full z-20 top-0 left-0">
  
<div className="container flex items-center justify-center mx-auto">
<p className="absolute left-4 font-Rubik-Puddles text-gray-300 font-semibold rounded text-3xl">
    Moodie
  </p>
<div className="grid md:flex md:w-auto md:order-1">

  <ul className="flex p-4 flex-row space-x-8 mt-0 dark:bg-neutral-900">
    <li>
      <NavLink to="/home" className="block text-gray-300 font-semibold rounded md:dark:hover:text-white">Home</NavLink>
    </li>
    <li>
      <NavLink to="/about-us" className="block text-gray-300 font-semibold rounded md:dark:hover:text-white">About Us</NavLink>
    </li>
  </ul>
</div>
<button className="absolute right-4" onClick={logOutACB}>
        <p className="block text-black bg-white px-2 py-0.5 font-semibold rounded transition duration-200 hover:scale-105">
        Sign out
        </p>
    </button>
</div>
</nav>)
}