import { BsPatchCheckFill } from "react-icons/bs";
import "./Experience.scss";
const Experience = () => {
  return (
    <section id="experience" className="w-auto">
      <div className="section__header">
        <h5>what skills i have</h5>
        <h2>my experience</h2>
      </div>
      <div className="experience__container container">
        <div className="experience__content">
          <article className="experience__details">
            <BsPatchCheckFill />
            <div>
              <h4>html & pugjs </h4>
              <small className="text-align">experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill />
            <div>
              <h4>scss / css</h4>
              <small className="text-align">experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill />
            <div>
              <h4> react / javascript</h4>
              <small className="text-align">experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill />
            <div>
              <h4> bootstrap / tailwind </h4>
              <small className="text-align">experienced</small>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
