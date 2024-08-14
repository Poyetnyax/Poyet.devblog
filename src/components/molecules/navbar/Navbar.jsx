import './Navbar.css'
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <>
        <div className='navbar'>
            <div className='logo'>
                <h3>Poyet.dev</h3>
            </div>
            <div className='links'>
                <Link 
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="about"
                    activeClassName="selected"
                    
                >
                    About
                </Link>
                <Link 
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="resume"
                    activeClassName="selected"
                >
                    Resume
                </Link>
                <Link 
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="skills"
                    activeClassName="selected"
                >
                    Skills
                </Link>
                <Link 
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="contact"
                    activeClassName="selected"
                >
                    Contact
                </Link>
            </div>
        </div>
        </>
    );
};

export default Navbar;