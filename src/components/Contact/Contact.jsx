import React from "react";
import "./Contact.scss";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="section__header">
        <h5>get in touch</h5>
        <h2>contact me </h2>
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>email</h4>
              <h5>emaildailyuse@gmail.com</h5>
              <a href="mailto:emaildailyuse@gmail.com">mail me</a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className="contact__option-icon" />
              <h4>whatsapp</h4>
              <a href="https://api.whatsapp.com/send?phone=+212635110042">
                contact me on whatsapp
              </a>
            </article>
          </div>
          <form>
            <input
              type="text"
              name="name"
              placeholder="your full name"
              required
              autoFocus
            />
            <input
              type="email"
              name="email"
              id=""
              placeholder="your email"
              required
            />
            <textarea
              name="description"
              required
                          placeholder="message content"
                          rows={5}
            ></textarea>
            <button type="submit">send message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
