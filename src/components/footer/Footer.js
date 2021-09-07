import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <div className="footer-container">
        <footer className="row py-5 my-5 border-top">
          <div className="col-4 logo-container">
            <img src="./images/logo.webp" alt="logo" className="logo" />
            <div className="col">
              <span>by BLINK HOTELS TM</span>
            </div>
            <img
              src="./images/certificate.jpeg"
              alt="certificate"
              className="certificate"
            />
          </div>
          <div className="col-8">
            <div className="row">
              <div className="row">
                <div className="col-4">
                  <DropdownButton
                    id="dropdown-basic-button"
                    className="language-btn"
                    title="Languages"
                  >
                    <Dropdown.Item href="/">English</Dropdown.Item>
                    <Dropdown.Item href="/">Hindi</Dropdown.Item>
                    <Dropdown.Item href="/">Marathi</Dropdown.Item>
                    <Dropdown.Item href="/">Spanich</Dropdown.Item>
                    <Dropdown.Item href="/">French</Dropdown.Item>
                  </DropdownButton>
                </div>
                <div className="col-4">
                  <button type="button" class="btn btn-secondary">
                    Modify/Cancel
                  </button>
                </div>
                <div className="col-4">
                  <button type="button" class="btn btn-info">
                    Accessibility
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                      <a href="/">About Us</a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="/">Reviews</a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="/">Directions</a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="/">News</a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="/">Cleaning Protocols</a>
                    </li>
                  </ul>
                </div>

                <div className="col-4">
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                      <a href="/">Jobs</a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="/">Blogs</a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="/">Lost & Found</a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="/">FAQs</a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="/">Personal Data Request</a>
                    </li>
                  </ul>
                </div>

                <div className="col-4">
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                      <a href="/">Sitemap</a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="/">Cookie Policy</a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="/">Privacy Policy</a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="/">Terms & Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
