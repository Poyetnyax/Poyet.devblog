import './Home.css';
import Headroom from 'react-headroom';
import Navbar from '../../components/molecules/navbar/Navbar';
import Separator from '../../components/atoms/separator/Separator';
import Intro from '../sections/intro/Intro';
import About from '../sections/about/About';
import Resume from '../sections/resume/Resume';
import Skills from '../sections/skills/Skills';

const Home = () => {
  return (
    <div className='home'>
        <Headroom>
            <Navbar />
        </Headroom>
        <Separator />
        <Intro />
        <Separator />
        <About />
        <Separator />
        <Resume />
        <Separator />
        <Skills />
    </div>
  );
};

export default Home;
