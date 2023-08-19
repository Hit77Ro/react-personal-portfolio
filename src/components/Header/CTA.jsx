import CV from "../../assets/images/cv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        {" "}
        download
      </a>
      <a href="#contact" className="btn btn-primary">
        let's talk
      </a>
    </div>
  );
};

export default CTA;
