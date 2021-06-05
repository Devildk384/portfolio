import React from "react"
import "./contact.scss"

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="contact__title">Get In Touch</h1>

      <div>
        <a className="contact__phone" href="tel:07460 760 448">
          +91 7668361787
        </a>
      </div>
      <button className="contact__btn">
        <a href="mailto:durgeshkumar384@gmail.com">Email Me</a>
      </button>
    </section>
  )
}
export default Contact
