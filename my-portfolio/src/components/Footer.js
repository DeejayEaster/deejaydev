import React from "react";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/donald-easter-160aa0188/"
            target="_blank"
          >
            <i className="fab fa-linkedin fa-3x"></i>
          </a>
          <a
            href="https://github.com/DeejayEaster"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-3x"></i>
          </a>
          <a
            href="https://www.facebook.com/donald.easter.397"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook fa-3x"></i>
          </a>
          <a
            href="https://www.instagram.com/deejayisawesome/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram fa-3x"></i>
          </a>
        </div>
        <h5 className="copyright">DEEJAY EASTER ©2019</h5>
      </section>
    </>
  );
};

export default Footer;
