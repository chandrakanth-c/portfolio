import './About.css';
import img from '../assets/chandrakanth_chittappa_image.jpeg';
import Links from '../components/Links';

function About(){
    return(
        <div className="about-container">
            <div className="about-image">
                <div className="image">
                    <img id="imageId" src={img} alt="portfolio_image"/>
                </div>
            </div>
            <div className="about-text">
                <div className="text-animation-container">
                    <div className="displayText">
                        <div className="static-txt">Hello!<br/>
                            I'm Chandrakanth
                        </div>
                        <div className="dynamic-txt-container">
                            <ul className="dynamic-txt">
                                <li><span id="front-end">Front-End Developer</span></li>
                                <li><span id="back-end">Back-End Developer</span></li>
                                <li><span id="full-stack">Full Stack Developer</span></li>
                            </ul>
                            <Links/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;