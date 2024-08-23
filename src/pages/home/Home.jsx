import './Home.css';
import Navbar from '../../components/molecules/navbar/Navbar';
import Separator from '../../components/atoms/separator/Separator';
import Intro from '../sections/intro/Intro';
import About from '../sections/about/About';
import Resume from '../sections/resume/Resume';
import Skills from '../sections/skills/Skills';
import Contact from '../sections/contact/Contact';
import Footer from '../sections/footer/Footer';

const Home = () => {
  return (
    <div className='home'>
        <section className='navbar-section'>       
            <Navbar />
            <Separator />
        </section>
        <Intro />
        <Separator />
        <About />
        <Separator />
        <Resume />
        <Separator />
        <Skills />
        <Separator/>
        <Contact/>
        <Separator/>
        <Footer/>
    </div>
  );
};

export default Home;
