import intro from "./../assets/intro-img.svg";
import temp1 from "./../assets/temp1.png";

const Home = () => {
    return (
        <div className="home" id="home">
            <div className="intro">
                <img src={temp1} alt="Women Techies 2021"/>
                <img src={intro} alt="Women Techies 2021"/>
            </div>
            <div className="about" id="about-dsc">
                <ul>
                    <li>
                        <div className="home-title">About DSC</div>
                        <p>DSC VIT powered by Google Developers is a student community at VIT Vellore. We strive to bring about technological innovations among students and we do so by providing a platform for them to exhibit their talents. We are a group of passionate designers, developers and managers who work together to bring about collaborative results that better the lives of everyone around us.</p>
                    </li>
                    <li>
                        <div className="home-title">About VIT</div>
                        <p>Vellore Institute of Technology, Vellore VIT, Vellore is one of the top-rated engineering colleges in India. Diversity is the strongest aspect of the institute and the students from various states and nations, the key to its reputation. The university works on ideas and executes tasks of different domains under Clubs and Chapters.</p>
                    </li>
                </ul>
            </div>
            <div className="hackathon" id="hackathon">
                <div className="home-title">Hackathon</div>
                <p>This 24-hour hackathon aims to provide talented and independent women with the platform and resources to help them grow in their desired field and contribute to society with impactful and beneficial solutions. <b>There is a minimum requirement of 50% female participation in each team,</b> to ensure and promote women’s participation in tech and tech-related events. WomenTechies will be an opportunity for the budding developers to showcase their potential and skills under the mentorship of experts and come up with imperceptible ideas and ground-breaking solutions to problems that could potentially solve the woes of thousands of people.</p>
            </div>
            <div className="vision" id="vision"></div>
            <div className="sponsors" id="sponsors"></div>
        </div>
    )
}

export default Home;
