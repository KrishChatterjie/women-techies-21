import { useState } from "react";
import dscLogo from './../assets/dsc-logo.png';
import Modal from './Modal';

const Nav = ({ active, introRef, aboutRef, hackRef, visionRef, sponsorsRef }) => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [show, setShow] = useState(false);

    const onClick = () => setMenuOpen(!menuOpen);

    const introScroll = () => {
        if (menuOpen) onClick();
        introRef.scrollIntoView();
    }
    const aboutScroll = () => {
        if (menuOpen) onClick();
        aboutRef.scrollIntoView();
    }
    const hackScroll = () => {
        if (menuOpen) onClick();
        hackRef.scrollIntoView();
    }
    const visionScroll = () => {
        if (menuOpen) onClick();
        visionRef.scrollIntoView();
    }
    const sponsorsScroll = () => {
        if (menuOpen) onClick();
        sponsorsRef.scrollIntoView();
    }

    return (<>
        <header>
            <a href="https://dscvit.com/" target="_blank" rel="noreferrer"><img className="dsc-logo" src={dscLogo} alt="DSC Logo" /></a>
            <nav>
                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <li><a className={`nav-home ${(active === 'intro') ? "nav-home-active" : ""}`} onClick={introScroll}>Home</a></li>
                    <li><a className={`nav-about ${(active === 'about') ? "nav-about-active" : ""}`} onClick={aboutScroll}>About DSC</a></li>
                    <li><a className={`nav-hack ${(active === 'hack') ? "nav-hack-active" : ""}`} onClick={hackScroll}>Hackathon</a></li>
                    <li><a className={`nav-vision ${(active === 'vision') ? "nav-vision-active" : ""}`} onClick={visionScroll}>Vision</a></li>
                    {/* <li><NavLink to="teaser" exact activeClassName='nav-active' onClick={() => setShow(true)}>Teaser</NavLink></li> */}
                    {/* <li><NavLink to="timeline" exact activeClassName='nav-active' onClick={() => setShow(true)}>Timeline</NavLink></li> */}
                    {/* <li><NavLink to="speakers" exact activeClassName='nav-active' onClick={() => setShow(true)}>Speakers</NavLink></li> */}
                    <li><a className={`nav-sponsors ${(active === 'sponsors') ? "nav-sponsors-active" : ""}`} onClick={sponsorsScroll}>Sponsors</a></li>
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
    );
}

export default Nav;
