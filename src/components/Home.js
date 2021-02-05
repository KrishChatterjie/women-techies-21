import Intro from "./Intro";
import About from "./About";
import Hackathon from "./Hackathon";
import Vision from "./Vision";
import Sponsors from "./Sponsors";

const Home = () => {
    return (
        <div className="home" id="home">
            <Intro />
            <About />
            <Hackathon />
            <Vision />
            <Sponsors />
        </div>
    )
}

export default Home;
