import './Intro.css';
import heroimg from '../../../assets/heroimg.jpeg';

const Intro = () => {
    return (
        <section id="intro" className="intro">
            <div className="intro__text">
                <h1>Hello, I'm Poyet 👋</h1>
                <p>I'm a full stack developer based in Poland 🇵🇱</p>
            </div>
            <div className="hero.img">
                <img className='img' src={heroimg} alt=""/>
            </div>
        </section>
    );
};

export default Intro;