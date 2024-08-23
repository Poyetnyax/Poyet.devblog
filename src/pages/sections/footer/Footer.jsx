import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import'./Footer.css';

const Footer = () => {

    const currentYear = new Date().getFullYear();
  return (
    <container id='footer' className="footer">
        <div className="footer">
            <div className="footer_socials">
                <a href="https://github.com/Poyetnyax" className="contact-link">
                    <FaGithub />
                </a>
                <a href="mailto:poyetnyahuku3@gmail.com" className="contact-link">
                    <FaEnvelope />
                </a>
                <a href="https://www.linkedin.com/in/poyet-nyahuku-365aa4266/" target="_blank" rel="noopener noreferrer" className="contact-link">
                    <FaLinkedin />
                </a>
            </div>
            <div className="footer_text" >
                <p className="footertext">&copy; {currentYear} Poyet Nyahuku. All rights reserved.</p>
                <a href="https://github.com/Poyetnyax/Poyet.devblog" target='_blank' rel="noopener noreferrer" className="contact-link">
                    <FaGithub />
                    Checkout The Source Code
                </a>
            </div>
        </div> 
    </container>
  )
}

export default Footer