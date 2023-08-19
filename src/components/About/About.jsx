import Me from "../../assets/images/me-about.jpg";
import "./about.scss"
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <div className="section__header">
        <h5>get to know </h5>
        <h2>about me</h2>
      </div>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>experience</h5>
              <small> 3+ years working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>experience</h5>
              <small> 3+ years working</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>experience</h5>
              <small> 80+ completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
            soluta odio doloribus iure porro repudiandae, aliquam facilis
            laudantium a. Suscipit?
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
