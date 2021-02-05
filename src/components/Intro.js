import { BsFillPlayFill } from "react-icons/bs";
import intro from "./../assets/intro-img.svg";
import logo from "./../assets/Logo.png";

const Intro = () => {
    return (
        <div className="intro">
            <div className="first">
                <div className="first-logo"><img src={logo} alt="WomenTechies21 Logo" /></div>
                <div className="first-soon">Coming Soon</div>
                <div className="first-teaser"><BsFillPlayFill style={{ color: '#FC257E', cursor: 'pointer' }} />    Teaser</div>
            </div>
            <div className="first-img"><img src={intro} alt="Women Techies 2021" /></div>
        </div>
    )
}

export default Intro;
