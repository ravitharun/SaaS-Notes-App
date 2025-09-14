// Navbar.jsx
import React, { useState } from "react";
import { FaUserCircle, FaSignInAlt, FaSignOutAlt, FaHome, FaStickyNote } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white px-8 py-3 flex items-center justify-between shadow-lg">
      {/* Logo */}
      <div className="text-2xl font-extrabold tracking-wide uppercase font-poppins">
        SaaS Notes
      </div>

   

      {/* Right side user dropdown */}
      <div className="relative">
        <button
          onClick={() => setDropdown(!dropdown)}
          className="flex items-center space-x-2 hover:text-gray-200 focus:outline-none"
        >
          <FaUserCircle size={26} className="drop-shadow-md" />
          <span className="hidden sm:inline">User</span>
        </button>

        {dropdown && (
          <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 animate-fadeIn">
            <Link
              to="/login"
              className="flex items-center px-4 py-2 hover:bg-gray-100 transition"
            >
              <FaSignInAlt className="mr-2 text-blue-600" /> Login
            </Link>
            <Link
              to="/logout"
              className="flex items-center px-4 py-2 hover:bg-gray-100 transition"
            >
              <FaSignOutAlt className="mr-2 text-red-500" /> Logout
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
