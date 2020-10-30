import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__description">
          Made by{" "}
          <a
            style={{ color: "red", textDecoration: "none" }}
            href="https://musing-keller-2db33f.netlify.app"
            target="_blank"
          >
            {" "}
            Luis Melo{" "}
          </a>
          | 2020
        </p>
      </div>
    </footer>
  );
};

export default Footer;
