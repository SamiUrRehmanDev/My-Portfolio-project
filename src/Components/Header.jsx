import React from 'react'
import { useState } from 'react'
import profile from "../img/sami.jpeg"
import home from "../img/home.png"
import about from "../img/id-card.png"
import service from "../img/isometric-cube-view.png"
import email from "../img/email.png"
import background from "../img/background.jpg"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
    const navigate = useNavigate();

    const handleNavClick = (path) => {
    setMobileMenuOpen(false); // Close menu
    navigate(path);
    };

  return (
    <div className="m-0 p-0">
  <header
    style={{ backgroundImage: `url(${background})` }}
    className="w-full bg-cover bg-center"
  >
    <div className="sm:w-[70%] w-full px-4 sm:mx-auto pt-5">
      <nav className="flex justify-between items-center w-full">
        <a
          href="/main/index.html"
          className="text-white font-dancing text-[27px] font-extrabold"
        >
          Sami Ur Rehman
        </a>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu} // You'll need to implement toggle logic
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex text-white text-sm justify-end gap-6 items-center w-[60%]">
          <li>
            <Link to="/" className="flex flex-col items-center justify-center">
              <img className="w-7" src={home} alt="home" />
              <span className="text-sm">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className="flex flex-col items-center justify-center">
              <img className="w-7" src={about} alt="about" />
              <span className="text-sm">About</span>
            </Link>
          </li>
          <li>
            <Link to="/service" className="flex flex-col items-center justify-center">
              <img className="w-7" src={service} alt="service" />
              <span className="text-sm">Services</span>
            </Link>
          </li>
          <li>
            <Link to="/contactus" className="flex flex-col items-center justify-center">
              <img className="w-7" src={email} alt="contact" />
              <span className="text-sm">Contact</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav - Shown when menu is toggled */}
      <ul className="sm:hidden mt-4 text-white text-sm flex flex-col space-y-4" style={{ display: mobileMenuOpen ? 'flex' : 'none' }}>
  <li>
    <button onClick={() => handleNavClick('/')} className="flex items-center space-x-2">
      <img className="w-6" src={home} alt="home" />
      <span>Home</span>
    </button>
  </li>
  <li>
    <button onClick={() => handleNavClick('/aboutus')} className="flex items-center space-x-2">
      <img className="w-6" src={about} alt="about" />
      <span>About</span>
    </button>
  </li>
  <li>
    <button onClick={() => handleNavClick('/service')} className="flex items-center space-x-2">
      <img className="w-6" src={service} alt="service" />
      <span>Services</span>
    </button>
  </li>
  <li>
    <button onClick={() => handleNavClick('/contactus')} className="flex items-center space-x-2">
      <img className="w-6" src={email} alt="contact" />
      <span>Contact</span>
    </button>
  </li>
</ul>

    </div>
  </header>
</div>

  )
}

export default Header