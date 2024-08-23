import './Contact.css';
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <section id="contact" className="contact_container">
        <h1>Contact Me</h1>
        <div className="contact_info">
          <a href="mailto:poyetnyahuku3@gmail.com" className="contact-link">
            <FaEnvelope /> poyetnyahuku3@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/poyet-nyahuku-365aa4266/" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FaLinkedin /> Poyet Nyahuku
          </a>
        </div>
      </section>
    </>
  )
}

export default Contact;
