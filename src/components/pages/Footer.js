import React from "react";
import "../App.css";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/HansVanHousen",
    color: "black",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/hansvh",
    color: "#black",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/leadlinedmind/",
    color: "black",
  },
  {
    name: "Art",
    url: "https://leadlinedmind.com/",
    color: "black",
  },
];

// Footer component
const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="footer-container">
        <section className="social-icons-wrapper d-flex flex-md-row justify-content-center">
          {socials.map(({ name, url }) => (
            <div
              key={name}
              className="d-flex flex-column align-items-center mx-md-2 transparent-bg"
            >
              <a
                href={url}
                className={`icon ${name}`}
                target="_blank"
                rel="noreferrer"
              ></a>
              <a href={url} target="_blank" rel="noreferrer">
                <span className="d-inline-block mx-1 name">{name}</span>
              </a>
            </div>
          ))}
        </section>
        <section className="form-footer">
          <p>
            <h6 className="copyright-text">
              &copy; {new Date().getFullYear()}
            </h6>
          </p>
        </section>
      </div>
    </footer>
  );
};
// Export Footer
export default Footer;
