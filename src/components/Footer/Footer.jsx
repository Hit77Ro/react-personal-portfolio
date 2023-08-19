import "./Footer.scss";
import { BsDribbble, BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
const Footer = () => {
  return (
    <footer id="footer"  className="section footer">
      <div className="container">
        <a href="#0" className="footer__logo">
          Smail
        </a>
        <ul className="permalinks">
          <li>
            <a href="#a">home</a>
          </li>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#experience">experience</a>
          </li>
          <li>
            <a href="#services">services</a>
          </li>
          <li>
            <a href="#portfolio">portfolio</a>
          </li>
          <li>
            <a href="#testimonials">testimonials</a>
          </li>
        </ul>
        <div className="footer__socials">
          <a href="https://dribbble.com">
            <BsDribbble className="icon" />
          </a>
          <a href="https://github.com/Hit77Ro/">
            <BsGithub className="icon" />
          </a>
          <a href="https://linkedin">
            <BsLinkedin className="icon" />
          </a>
            </div>
            <div className="footer__copyright">
                <p> @Smail-Tn all right reserved : {new Date().getFullYear()} </p>
            </div>
      </div>
    </footer>
  );
};

export default Footer;
