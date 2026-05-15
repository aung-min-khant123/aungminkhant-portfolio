import { faBars, faCircleXmark, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const onToggle = () => dispatch(toggleTheme());

  return (
    <nav className="fixed top-0 left-0 w-full bg-(--nav-bg)/5 backdrop-blur-2xl shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-md md:text-2xl font-bold text-(--text-default) font-stretch-ultra-expanded animate-bounce">
          Welcome to my portfolio
        </h1>
        {/* Desktop Menu */}
        <div className="flex gap-10">
          <ul className="hidden md:flex space-x-8 font-bold font-mono text-(--text-muted) text-lg cursor-grab ">
            <li className="list"><a href="#home">Home</a></li>
            <li className="list"><a href="#about">About</a></li>
            <li className="list"><a href="#skills">Skills</a></li>
            <li className="list"><a href="#project">Projects</a></li>
            <li className="list"><a href="#contact">Contact Me</a></li>
          </ul>
          <button
            aria-label="Toggle theme"
            className="w-8 h-8 border rounded-full flex items-center justify-center mx-2  md:mx-0"
            onClick={onToggle}
          >
            <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl focus:outline-none"
        >
          <FontAwesomeIcon icon={isOpen? faCircleXmark : faBars} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-(--nav-bg)/1 shadow-lg ">
          <ul className="flex flex-col items-center space-y-6 py-6 font-bold font-mono text-(--text-default)">
            <li className=""><a href="#home">Home</a></li>
            <li className=""><a href="#about">About Me</a></li>
            <li className=""><a href="#skills">Skills</a></li>
            <li className=""><a href="#project">Projects</a></li>
            <li className=""><a href="#contact">Contact Me</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
