import CTA from "./CTA.jsx";
import HeaderSocial from "./Header_Social.jsx";
import Me from "../../assets/images/me.png";
import "./Header.scss";
const Header = () => {
  return (
    <header className="header " id="home">
      <div className="container header__container">
        <div className="section__header">
          <h5>Hi, i'm </h5>
          <h1>Smail Tn</h1>
        </div>
        <h5 className="text-light">FrontEnd Web Developer</h5>
        <CTA />

        <div className="me">
          <img src={Me} alt="my picture" />
        </div>
        <a href="#contact" className="scroll__down">
          scroll down{" "}
        </a>

        <HeaderSocial />
      </div>
    </header>
  );
};

export default Header;
