import "./Portfolio.scss";
import Img1 from "../../assets/images/portfolio1.jpg";
import Img2 from "../../assets/images/portfolio2.jpg";
import Img3 from "../../assets/images/portfolio3.jpg";
import Img4 from "../../assets/images/portfolio4.jpg";
import Img5 from "../../assets/images/portfolio5.png";
import Img6 from "../../assets/images/portfolio6.jpg";
const items = [Img1, Img2, Img3, Img4, Img5, Img6];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="section__header">
        <h5>my recent work </h5>
        <h2>portfolio</h2>
      </div>
      <div className="portfolio__container container">
        {items.map((image) => (
          <article  key={crypto.randomUUID()} className="portfolio__item">
            <div className="portfolio__item-img">
              <img src={image} alt="" />
            </div>
            <div className="portfolio__item-content">
              <h3>Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
              <div className="portfolio__item-btns">
                <a href="https://github.com" className="btn" target="_blank">
                  github
                </a>
                <a
                  href="https://dribbble.com/Alien_pixels"
                  className="btn btn-primary "
                  target="_blank"
                >
                  live demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
