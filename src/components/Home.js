import { useState } from "react";
import Intro from "./Intro";
import About from "./About";
import Hackathon from "./Hackathon";
import Vision from "./Vision";
import Sponsors from "./Sponsors";
import Modal from './Modal'

const Home = () => {

    const [show, setShow] = useState(false);

    const hisom = () => {
        var text = "";
        if (window.getSelection) {
            text = window.getSelection().toString();
        } else if (document.selection && document.selection.type !== "Control") {
            text = document.selection.createRange().text;
        }
        else return;
        if(text.toLowerCase() === 'dsc' || text.toLowerCase() === 'dsc ') {
            setShow(true)
        }
    }

    document.onmouseup = hisom
    document.onpointerup = hisom

    return (
        <div className="home" id="home">
            <Intro />
            <About />
            <Hackathon />
            <Vision />
            <Sponsors />
            <Modal show={show} onClose={() => setShow(false)} />
        </div>
    )
}

export default Home;
