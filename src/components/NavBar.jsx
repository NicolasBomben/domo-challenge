import PropTypes from "prop-types";

import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaTwitter, FaInstagram, FaLinkedin, FaDribbble } from "react-icons/fa";
import Spinner from "../assets/spinner-logo.png";

//el componente recibe las props del padre para el manejo del estado.
export const Navbar = ({ toggleNav, isNavOpen }) => {
  return (
    <div className="container-fluid">
      <nav className="py-4">
        <div className="container d-flex justify-content-between align-items-center">
          <ul className="navbar-nav flex-row">
            <li className="nav-item me-3">
              <a className="nav-link" href="#">
                <FaTwitter color="#0a0a0a" size={25} />
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#">
                <FaInstagram color="#0a0a0a" size={25} />
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#">
                <FaLinkedin color="#0a0a0a" size={25} />
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#">
                <FaDribbble color="#0a0a0a" size={25} />
              </a>
            </li>
          </ul>

          <a className="navbar-brand mx-auto" href="#">
            <img src={Spinner} alt="logo" width={40}/>
            <span className="fw-bold h4 custom-primary-text">Comet</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNav}
            aria-controls="navbarNav"
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
          >
            <HiOutlineMenuAlt4 color="#000" size={40} />
          </button>
        </div>
      </nav>

      <div
        className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
        id="navbarNav"
      >
        <ul className="navbar-nav ms-auto d-flex flex-column flex-lg-row justify-content-lg-center align-items-lg-center">
          <li className="nav-item mx-lg-3">
            <a className="nav-link fw-semibold" href="#">
              About Us
            </a>
          </li>
          <li className="nav-item mx-lg-3">
            <a className="nav-link fw-semibold" href="#">
              Services
            </a>
          </li>
          <li className="nav-item mx-lg-3">
            <a className="nav-link fw-semibold" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  toggleNav: PropTypes.bool,
  isNavOpen: PropTypes.bool,
}