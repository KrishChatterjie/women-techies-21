import { BsFillPlayFill } from "react-icons/bs";
import intro from "./../assets/intro-img.svg";

const Intro = () => {
    return (
        <div className="intro">
            <div className="first">
                <div className="first-logo">
                    {/* <svg src={logo} alt="WomenTechies21 Logo" /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="334" height="210" viewBox="0 0 334 210">
                        <defs>
                            <clipPath id="clip-Custom_Size_1">
                                <rect width="334" height="210" />
                            </clipPath>
                        </defs>
                        <g id="Custom_Size_1" data-name="Custom Size – 1" clipPath="url(#clip-Custom_Size_1)">
                            <rect width="334" height="210" fill="#fff" />
                            <g id="Group_1" data-name="Group 1" transform="translate(-335 -163)">
                                <text id="Women_Techies_" data-name="Women Techies" transform="translate(275 180)" fill="#fc257e" fontSize="72" fontFamily="Poppins" fontWeight="700"><tspan x="81.576" y="57">Women</tspan><tspan x="87.84" y="120">Techies</tspan><tspan x="216" y="183"></tspan></text>
                                <text id="_2021" data-name="2021" transform="translate(458 318)" fill="#fc257e" fontSize="37" fontFamily="Poppins" fontWeight="700"><tspan x="2.007" y="29">2021</tspan></text>
                                <line id="Line_1" data-name="Line 1" x2="79" transform="translate(373.5 333.5)" fill="none" stroke="#fc257e" strokeWidth="3" />
                                <line id="Line_2" data-name="Line 2" x2="79" transform="translate(555.5 333.5)" fill="none" stroke="#fc257e" strokeWidth="3" />
                            </g>
                        </g>
                    </svg>

                </div>
                <div className="first-soon">Coming Soon</div>
                <div className="first-teaser"><BsFillPlayFill style={{ color: '#FC257E', cursor: 'pointer' }} />    Teaser</div>
                <button className="button">Sign Up for Updates</button>
            </div>
            <div className="first-img"><img src={intro} alt="Women Techies 2021" /></div>
        </div>
    )
}

export default Intro;
