import { HashRouter as Router, Route} from "react-router-dom";
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import dscLogo from './../assets/dsc-logo.png';
import Modal from './Modal'

const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [show, setShow] = useState(false);

    const onClick = () => {
        if (!menuOpen) {
            setMenuOpen(true);
        }
        else {
            setMenuOpen(false);
        }
    }
    return (
        <Router hashType='noslash'>
            <Route path="/" render={() => (
                <>
                    <header>
                        <a href="https://dscvit.com/" target="_blank" rel="noreferrer"><img className="dsc-logo" src={dscLogo} alt="DSC Logo" /></a>
                        <nav>
                            <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                                <li><NavLink to="" exact activeClassName='nav-active'>Home</NavLink></li>
                                <li><NavLink to="about-dsc" exact activeClassName='nav-active'>About DSC</NavLink></li>
                                <li><NavLink to="hackathon" exact activeClassName='nav-active'>Hackathon</NavLink></li>
                                <li><NavLink to="vision" exact activeClassName='nav-active'>Vision</NavLink></li>
                                {/* <li><NavLink to="teaser" exact activeClassName='nav-active' onClick={() => setShow(true)}>Teaser</NavLink></li> */}
                                {/* <li><NavLink to="timeline" exact activeClassName='nav-active' onClick={() => setShow(true)}>Timeline</NavLink></li> */}
                                {/* <li><NavLink to="speakers" exact activeClassName='nav-active' onClick={() => setShow(true)}>Speakers</NavLink></li> */}
                                <li><NavLink to="sponsors" exact activeClassName='nav-active'>Sponsors</NavLink></li>
                                {/* <li><NavLink to="contact-us" exact activeClassName='nav-active' onClick={() => setShow(true)}>Contact Us</NavLink></li> */}
                                {/* <li><NavLink to="faq" exact activeClassName='active' onClick={() => setShow(true)}>FAQ's</NavLink></li> */}
                                <Modal show={show} onClose={() => setShow(false)} />
                            </ul>
                        </nav>
                        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={onClick}>
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                        </div>
                    </header>
                </>
            )} />
        </Router>
    );
}

export default Nav;
