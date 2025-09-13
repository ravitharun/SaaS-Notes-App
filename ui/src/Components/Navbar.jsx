// Navbar.jsx
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-700 to-blue-500 text-white px-6 py-3 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div className="text-2xl font-extrabold tracking-wide uppercase font-poppins">
        Sass
      </div>

      {/* Right side user dropdown */}
      <div className="relative">
        <button
          onClick={() => setDropdown(!dropdown)}
          className="flex items-center space-x-2 hover:text-gray-200 focus:outline-none"
        >
          <FaUserCircle size={24} />
          <span>User</span>
        </button>

        {dropdown && (
          <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-lg z-50">
            <Link to="/login" className="block px-4 py-2 hover:bg-gray-100">
              Login
            </Link>
            <Link to="/logout" className="block px-4 py-2 hover:bg-gray-100">
              Logout
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
