import "./Testimonials.scss";
import Avatar2 from "../../assets/images/avatar2.jpg";
import Avatar3 from "../../assets/images/avatar3.jpg";
import Avatar4 from "../../assets/images/avatar4.jpg";
import Avatar1 from "../../assets/images/avatar1.jpg";
// importing swipper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const data = [
  {
    avatar: Avatar1,
    name: "Abas l9ra3",
    review:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. ",
  },
  {
    avatar: Avatar2,
    name: "mohammed sabir",
    review:
      "I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, ",
  },
  {
    avatar: Avatar3,
    name: "Will smith Jan",
    review:
      "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this,",
  },
  {
    avatar: Avatar4,
    name: "john doe",
    review:
      " It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. ",
  },
];
const Testimonials = () => {
  return (
    <section className="testimonials w-auto" id="testimonials">
      <div className="section__header">
        <h5>review from clients</h5>
        <h2>testimonials</h2>
      </div>
      <Swiper
        className="container testimonials__container"
        spaceBetween={40}
        slidesPerView={1}
      >
        {data.map((obj) => (
          <SwiperSlide
            key={crypto.randomUUID()}
            className="client testimonial "
          >
            <div className="client__avatar">
              <img src={obj.avatar} />
            </div>
            <h5 className="client__name"> {obj.name} </h5>
            <small className="client__review">{obj.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
