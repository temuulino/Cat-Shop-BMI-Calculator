import React from "react";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="footer">
      <small>Temuulin Odontur</small>
      <small>Copyrights {date}</small>
    </footer>
  );
}

export default Footer;
