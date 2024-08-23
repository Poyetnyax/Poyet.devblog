import './Intro.css';
import heroimg from '../../../assets/me2.jpeg';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Intro = () => {
    return (
        <section id="intro" className="intro">
            <div className="intro_container">
                <div className="intro__text">
                    <h1>Hello, I'm Poyet 👋</h1>
                    <p>I'm a full stack developer based in Poland 🇵🇱</p>
                </div>
                <div className="hero.img">
                    <img className='img' src={heroimg} alt=""/>
                </div>
            </div>
            <div className="intro_socials">
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
        </section>
    );
};

export default Intro;