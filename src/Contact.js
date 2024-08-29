import "./Contact.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const formSuccessMessage =
  "Thanks for your submission! I'll get back to you as soon as possible.";
const formErrorMessage =
  "Oh no! Something went wrong with your submission. Please try again later.";

function Contact() {
  const form = useRef();

  const [isOpen, setIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_scerlce",
        "template_vk45st4",
        form.current,
        "_C3IbivUsbi6vVrI8"
      )
      .then(
        (result) => {
          console.log(result.text);
          setModalMessage(formSuccessMessage);
          setIsOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setModalMessage(formErrorMessage);
          setIsOpen(true);
        }
      );
  };

  return (
    <div id="contact" className="section blue">
      <div className="section-header">ENQUIRE NOW</div>
      <div className="contact-form">
        <div className="contact-form-title">Get in touch</div>
        <div className="form-wrapper">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              placeholder="Your name"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your email"
              required
            />
            <input
              type="text"
              name="user_gender"
              placeholder="Your gender"
              required
            />
            <input
              type="text"
              name="user_phone"
              placeholder="Your phone"
              required
            />
            <textarea name="message" placeholder="Message" required />
            <input className="button purple" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
