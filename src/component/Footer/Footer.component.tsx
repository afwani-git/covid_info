import React from "react";
import "./Footer.style.scss";

const Footer = () => {
    return(
      <footer className="footer">
        <p className="footer__text">
          <span className="copy">&copy; {new Date().getFullYear} 2020 Copyright:</span>
          NullBytes
        </p>
      </footer>
    )
}

export default Footer;
