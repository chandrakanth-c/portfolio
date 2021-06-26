import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin,faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import resume from '../assets/Chandrakanth_Chittappa_Resume.docx';
import './Links.css';

function Links(){
    return(
        <div className="links-conatiner">
            <div>
                <a href="https://www.linkedin.com/in/chandrakanth-chittappa/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="individual-links"/></a>
                <a href="https://github.com/chittappac-su2020" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithubSquare} className="individual-links"/></a>
                <a href="mailto:chittappa.c@northeastern.edu?Subject=Hello" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} className="individual-links"/></a>
            </div>
            <div className="resume-download-block">
                <a href={resume} download>
                    <span>Download Resume</span>
                </a>
            </div>
        </div>
    )
}

export default Links;