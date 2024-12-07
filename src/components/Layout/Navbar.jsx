import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"; // Import your logo
import { FaCloudSun, FaCaretDown } from 'react-icons/fa'; // Import icons from react-icons/fa
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Social media icons

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdownVisibility = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  // Refs to detect clicks outside the dropdown
  const aboutDropdownRef = useRef(null);
  const projectDropdownRef = useRef(null);

  // Close mobile menu
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Dropdown toggle function
  const toggleDropdown = (key) => setDropdownOpen((prev) => (prev === key ? null : key));

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target) &&
        projectDropdownRef.current && !projectDropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(null);
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinkClass = ({ isActive }) =>
    `block px-4 py-2 text-gray-700 ${isActive ? "text-blue-700 border-b-2 border-blue-700" : "hover:text-blue-700"}`;

  return (
    <header className="bg-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="h-20 w-20" />
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-6">
          <NavLink to="/" className={`${navLinkClass} uppercase font-bold`}>HOME</NavLink>

          {/* About Us Dropdown */}
          <div className="relative" ref={aboutDropdownRef}>
            <button
              className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-700 focus:outline-none uppercase font-bold"
              onClick={() => toggleDropdown("about")}
            >
              ABOUT  <FaCaretDown className="ml-2 text-sm" />
            </button>
            {dropdownOpen === "about" && (
              <div className="absolute z-50 mt-2 w-48 bg-white shadow-lg rounded-md">
                <NavLink
                  to="/aboutus"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-700 hover:text-white uppercase font-bold"
                  onClick={() => setDropdownOpen(null)}
                >
                  ABOUT US
                </NavLink>
                <NavLink
                  to="/about"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-700 hover:text-white uppercase font-bold"
                  onClick={() => setDropdownOpen(null)}
                >
                  OUR PROCESS
                </NavLink>
                <NavLink
                  to="/about"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-700 hover:text-white uppercase font-bold"
                  onClick={() => setDropdownOpen(null)}
                >
                  IMPACT
                </NavLink>
                <NavLink
                  to="/home4"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-700 hover:text-white uppercase font-bold"
                  onClick={() => setDropdownOpen(null)}
                >
                  MISSION AND VISION
                </NavLink>
                <NavLink
                  to="media"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-700 hover:text-white uppercase font-bold"
                  onClick={() => setDropdownOpen(null)}
                >
                  MEDIA
                </NavLink>
              </div>
            )}
          </div>

          {/* Get Involved Dropdown */}
          <div className="relative" ref={projectDropdownRef}>
            <button
              className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-700 focus:outline-none uppercase font-bold"
              onClick={() => toggleDropdown("getInvolved")}
            >
              GET INVOLVED <FaCaretDown className="ml-2 text-sm" />
            </button>
            {dropdownOpen === "getInvolved" && (
              <div className="absolute z-50 mt-2 w-48 bg-white shadow-lg rounded-md">
                <NavLink
                  to="volunteerform"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-700 hover:text-white uppercase font-bold"
                  onClick={() => setDropdownOpen(null)}
                >
                  VOLUNTEER FORM
                </NavLink>
                <NavLink
                  to="/about/corporate"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-700 hover:text-white uppercase font-bold"
                  onClick={() => setDropdownOpen(null)}
                >
                  CORPORATE (CSR)
                </NavLink>
              </div>
            )}
          </div>

          {/* Projects Dropdown */}
          <div className="relative" ref={projectDropdownRef}>
            <button
              className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-700 focus:outline-none uppercase font-bold"
              onClick={() => toggleDropdown("project")}
            >
              PROJECTS <FaCaretDown className="ml-2 text-sm" />
            </button>
            {dropdownOpen === "project" && (
              <div className="absolute z-50 mt-2 w-56 bg-white shadow-lg rounded-md">
                <NavLink
                  to="/treeplantation"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-700 hover:text-white uppercase font-bold"
                  onClick={() => setDropdownOpen(null)}
                >
                  TREE PLANTATION
                </NavLink>
                <NavLink
                  to="/treeplantationschool"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-700 hover:text-white uppercase font-bold"
                  onClick={() => setDropdownOpen(null)}
                >
                  TREE PLANTATION IN SCHOOL
                </NavLink>
                <NavLink
                  to="/awarenesstr"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-700 hover:text-white uppercase font-bold"
                  onClick={() => setDropdownOpen(null)}
                >
                  AWARENESS
                </NavLink>
                <NavLink
                  to="/seed"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-700 hover:text-white uppercase font-bold"
                  onClick={() => setDropdownOpen(null)}
                >
                  SEED BANK
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/gallery" className={`${navLinkClass} uppercase font-bold`}>GALLERY</NavLink>
          <NavLink to="/contact" className={`${navLinkClass} uppercase font-bold`}>CONTACT</NavLink>

          {/* Mobile Social Media Icons */}
          <div className="flex space-x-4 justify-center py-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-700"
            >
              <FaFacebookF className="text-xl" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-700"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-700"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-700"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-blue-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="space-y-4 px-6 py-4">
            <NavLink
              to="/"
              className="block px-4 py-2 text-gray-700 hover:text-blue-700 font-bold uppercase"
              onClick={closeMobileMenu}
            >
              HOME
            </NavLink>
            <div className="relative">
              <button
                className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-700"
                onClick={() => toggleDropdown("about")}
              >
                ABOUT <FaCaretDown className="ml-2 text-sm" />
              </button>
              {dropdownOpen === "about" && (
                <div className="mt-2">
                  <NavLink
                    to="/about/ourprocess"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-700 hover:text-white"
                    onClick={closeMobileMenu}
                  >
                    ABOUT US
                  </NavLink>
                  <NavLink
                    to="/about/ourprocess"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-700 hover:text-white"
                    onClick={closeMobileMenu}
                  >
                    OUR PROCESS
                  </NavLink>
                  <NavLink
                    to="/impact"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-700 hover:text-white"
                    onClick={closeMobileMenu}
                  >
                    IMPACT
                  </NavLink>
                  <NavLink
                    to="/about/missionandvision"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-700 hover:text-white"
                    onClick={closeMobileMenu}
                  >
                    MISSION AND VISION
                  </NavLink>
                  <NavLink
                    to="/about/media"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-700 hover:text-white"
                    onClick={closeMobileMenu}
                  >
                    MEDIA
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink
              to="/contact"
              className="block px-4 py-2 text-gray-700 hover:text-blue-700 font-bold uppercase"
              onClick={closeMobileMenu}
            >
              CONTACT
            </NavLink>
            <NavLink
              to="/gallery"
              className="block px-4 py-2 text-gray-700 hover:text-blue-700 font-bold uppercase"
              onClick={closeMobileMenu}
            >
              GALLERY
            </NavLink>
            <div className="flex space-x-4 justify-center py-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-700"
              >
                <FaFacebookF className="text-xl" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-700"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-700"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-700"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
