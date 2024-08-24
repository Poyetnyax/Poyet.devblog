import './Navbar.css';
import { Link } from 'react-scroll';
import { useState } from 'react';
import logo from '../../../assets/picon.png';
import { FaFile } from "react-icons/fa"
import ResButton from '../../../components/molecules/resbutton/ResButton';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <div className='navbar'>
            <div className='logo'>
                <img src={logo} alt="" className="imglogo" />
            </div>
            <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
            <div className={`links ${isOpen ? 'active' : ''}`}>
                <Link 
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="about"
                    onClick={toggleMenu}
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
                    onClick={toggleMenu}
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
                    onClick={toggleMenu}
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
                    onClick={toggleMenu}
                >
                    Contact
                </Link>
                <ResButton>Resume <FaFile /></ResButton>
            </div>
        </div>
        </>
    );
};

export default Navbar;
