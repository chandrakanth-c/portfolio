import './Projects.css';
import ProjectCard from './ProjectCard';
import shrewed from '../assets/ecart.jpeg';
import greener from '../assets/greener.jpeg';
import spot from '../assets/spot.jpeg';
import fund from '../assets/fund.png';
import weather from '../assets/weather.jpeg';
import smart from '../assets/smart.jpeg';

function Projects(){

    return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ProjectCard image={shrewed} title="Shrewd Cart" line1="Book Store Application" line2="React, Node, Express, MySQL"/>
                    </div>
                    <div className="col">
                        <ProjectCard image={greener} title="Greener" line1="Eco-friendly store" line2="React, Node, Express, Mongo"/>
                    </div>
                    <div className="col">
                        <ProjectCard image={spot} title="Spotsteerer" line1="Job Portal" line2="Swift, Firebase"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ProjectCard image={fund} title="Fundraiser" line1="Fund Raiser" line2="Java, Swing, Db4o"/>
                    </div>
                    <div className="col">
                        <ProjectCard image={smart} title="Smartmanager" line1="Project Management Tool" line2="SpringMVC, Hiberante, MySQL"/>
                    </div>
                    <div className="col">
                        <ProjectCard image={weather} title="Weather Forecast" line1="Weather Forecast Application" line2="React"/>
                    </div>
                </div>
            </div>
    )
}

export default Projects;
