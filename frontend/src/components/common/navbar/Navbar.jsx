import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLogout } from "../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUserCircle,
  faArrowUpRightFromSquare,
  faXmark,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"; //l

import Logo from "../../../assets/images/tenlogo.jpg";
import SignInModal from "../../../components/auth/SignInModal";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../../lib/Constant";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const logout = useLogout();

  // Determine if user is logged in based on Redux state
  const isLoggedIn = !!user;

  const handleLogout = async () => {
    await logout();
    setIsDropdownOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white px-4 sm:px-6 lg:px-8 shadow font-[Poppins]">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 relative">
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setSidebarOpen(true)}>
            <FontAwesomeIcon icon={faBars} className="text-2xl text-black" />
          </button>
        </div>

        {/* Logo Center */}
        <div className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none">
          <a href="/">
            <img
              src={Logo}
              alt="TEN-Signature logo"
              className="h-11 rounded-full"
            />
          </a>
        </div>

        {/* Mobile User Icon + Dropdown */}
        <div className="lg:hidden relative">
          {isLoggedIn ? (
            <div>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-1"
              >
                <FontAwesomeIcon
                  icon={faUserCircle}
                  className="text-2xl text-black"
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 sm:w-48 bg-white rounded-lg shadow-lg z-50 p-3 sm:p-4 text-sm">
                  <ul className="space-y-2">
                    <li>
                      <Link
                        to="/properties"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        My Listings
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/bookings"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        My Bookings
                      </Link>
                    </li>
                    <li
                      onClick={handleLogout}
                      className="text-red-500 cursor-pointer"
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <button onClick={() => setShowModal(true)}>
              <FontAwesomeIcon
                icon={faUserCircle}
                className="text-2xl text-black"
              />
            </button>
          )}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-between items-center w-full">
          <div className="flex text-[14px] items-center space-x-6">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={label}
                to={to}
                className={({ isActive }) =>
                  `font-semibold ${
                    isActive
                      ? "text-[#00BFA6]"
                      : "text-black hover:text-[#00BFA6]"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => {
                if (isLoggedIn) {
                  window.location.href = "/add-property"; // navigate if logged in
                } else {
                  setShowModal(true); // open login modal if not logged in
                }
              }}
              className="relative px-6 py-3 text-[15px] font-semibold text-white rounded-xl bg-black border border-black"
            >
              List Your Outlet
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="text-sm ml-2"
              />
            </button>

            {/* Desktop User Dropdown */}
            <div className="flex items-center space-x-6">
              {isLoggedIn ? (
                <div
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <div className="flex items-center space-x-2 cursor-pointer">
                    <FontAwesomeIcon icon={faUserCircle} className="text-lg" />
                    <span>
                      Hello, {user?.first_name || user?.email || "User"}
                    </span>
                  </div>

                  {isDropdownOpen && (
                    <div className="absolute right-0 w-48 bg-white rounded-lg shadow-lg z-10 p-4">
                      <ul className="space-y-2">
                        <li className="hover:font-semibold cursor-pointer">
                          <Link to={"/properties"}>My Listings</Link>
                        </li>
                        <li className="hover:font-semibold cursor-pointer">
                          <Link to={"/bookings"}>My Bookings</Link>
                        </li>
                        <li
                          className="hover:font-semibold cursor-pointer text-red-500"
                          onClick={handleLogout}
                        >
                          Logout
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setShowModal(true)}
                  className="cursor-pointer flex items-center space-x-2 text-black text-[14px]"
                >
                  <FontAwesomeIcon icon={faUserCircle} className="text-lg" />
                  <span>Login / Register</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setSidebarOpen(false)}
        >
          <div
            className="bg-white w-[260px] sm:w-[300px] h-full shadow-lg flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sidebar Header */}
            <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
              <h2 className="text-sm font-semibold text-gray-800">
                Welcome to TEN-Signature
              </h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="bg-[#26c4a0] text-white rounded-full h-6 w-6 flex items-center justify-center hover:bg-[#1ba183] transition"
              >
                <FontAwesomeIcon icon={faXmark} className="text-base" />
              </button>
            </div>

            {/* Sidebar Body */}
            <div className="flex-1 overflow-y-auto px-4 py-5">
              {/* Navigation Links */}
              <div className="space-y-4">
                {navLinks.map(({ label, to, icon }) => (
                  <NavLink
                    key={label}
                    to={to}
                    onClick={() => setSidebarOpen(false)}
                    className={({ isActive }) =>
                      `flex justify-between items-center py-2 text-[12px] font-normal ${
                        isActive
                          ? "text-[#00BFA6] font-semibold"
                          : "text-gray-800 hover:text-[#00BFA6]"
                      }`
                    }
                  >
                    <span>{label}</span>
                    {icon && (
                      <FontAwesomeIcon
                        icon={icon}
                        className="text-gray-400 text-xs"
                      />
                    )}
                  </NavLink>
                ))}
              </div>

              {/* Support Info */}
              <div className="mt-8 border-t pt-4 text-md text-gray-700">
                <div className="font-semibold mb-2">
                  Total Free Customer Care
                </div>

                {/* Phone - Open WhatsApp */}
                <a
                  href="https://wa.me/919999999999" // Replace with your actual WhatsApp number
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-sm mb-1  font-[system-ui]"
                >
                  +(91) 999 999 9999
                </a>

                <div className="  font-semibold  text-md text-gray-700 mb-1">
                  Need Live Support?
                </div>

                {/* Email - Open Mail */}
                <a
                  href="mailto:info@entrepreneurshipnetwork.net"
                  className="font-[system-ui] text-sm"
                >
                  info@entrepreneurshipnetwork.net
                </a>
              </div>

              {/* Social Links */}
              <div className="mt-6 flex items-center gap-4 text-gray-500">
                <span className="font-semibold text-gray-800">Follow us</span>
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="hover:text-[#00BFA6] cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="hover:text-[#00BFA6] cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="hover:text-[#00BFA6] cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="hover:text-[#00BFA6] cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Auth Modal */}
      {showModal && <SignInModal onClose={() => setShowModal(false)} />}
    </nav>
  );
};

export default Navbar;
