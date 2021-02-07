import { useState, useEffect, useRef } from "react";
import Intro from "./Intro";
import About from "./About";
import Hackathon from "./Hackathon";
import Vision from "./Vision";
import Sponsors from "./Sponsors";
import Modal from './Modal'

const Home = () => {

    const [show, setShow] = useState(false);
    const [offset, setOffset] = useState(0);
    const [intro, setIntro] = useState(0);
    const [about, setAbout] = useState(0);
    const [hack, setHack] = useState(0);
    const [vision, setVision] = useState(0);
    const [sponsors, setSponsors] = useState(0);

    const introRef = useRef(null);
    const aboutRef = useRef(null);
    const hackRef = useRef(null);
    const visionRef = useRef(null);
    const sponsorsRef = useRef(null);

    const hisom = () => {
        var text = "";
        if (window.getSelection) {
            text = window.getSelection().toString();
        } else if (document.selection && document.selection.type !== "Control") {
            text = document.selection.createRange().text;
        }
        else return;
        if(text.toLowerCase() === 'dsc' || text.toLowerCase() === 'dsc ') {
            setShow(true);
        }
    }
    document.onmouseup = hisom;
    document.onpointerup = hisom;
    
    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset)
        }
    }, []);
    useEffect(() => {
        window.open = () => {
            setIntro(introRef.current.getBoundingClientRect().top);
            setAbout(aboutRef.current.getBoundingClientRect().top);
            setHack(hackRef.current.getBoundingClientRect().top);
            setVision(visionRef.current.getBoundingClientRect().top);
            setSponsors(sponsorsRef.current.getBoundingClientRect().top);
        };
    });
    console.log("intro outisde ", intro);
    // console.log(about);
    // console.log(hack);
    // console.log(vision);
    // console.log(sponsors);

    return (
        <div className="home" id="home">
            <Intro setIntro={setIntro} ref={introRef}/>
            <About setAbout={setAbout} ref={aboutRef}/>
            <Hackathon setHack={setHack} ref={hackRef}/>
            <Vision setVision={setVision} ref={visionRef}/>
            <Sponsors setSponsors={setSponsors} ref={sponsorsRef}/>
            <Modal show={show} onClose={() => setShow(false)} />
        </div>
    )
}

export default Home;
