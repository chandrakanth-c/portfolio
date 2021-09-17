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
            <div className="container" id="projects">
                <div className="row">
                    <div className="col">
                        <ProjectCard image={shrewed} title="Shrewd Cart" line1="Book Store Application" line2="React, Node, Express, MySQL" link="https://github.com/chandrakanth-c/webapp"/>
                    </div>
                    <div className="col">
                        <ProjectCard image={greener} title="Greener" line1="Eco-friendly store" line2="React, Node, Express, Mongo" link="https://github.com/chandrakanth-c/greener"/>
                    </div>
                    <div className="col">
                        <ProjectCard image={spot} title="Spotsteerer" line1="Job Portal" line2="Swift, Firebase" link="https://github.com/chandrakanth-c/spotsteerer"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ProjectCard image={fund} title="Fundraiser" line1="Fund Raiser" line2="Java, Swing, Db4o" link="https://github.com/chandrakanth-c/fundraiser"/>
                    </div>
                    <div className="col">
                        <ProjectCard image={smart} title="Smartmanager" line1="Project Management Tool" line2="SpringMVC, Hiberante, MySQL" link="https://github.com/chandrakanth-c/smartmanager"/>
                    </div>
                    <div className="col">
                        <ProjectCard image={weather} title="RestFull API's" line1="CRUD operations" line2="Node JS & MongoDB" link="https://github.com/chittappac-su2020/Restful_API"/>
                    </div>
                </div>
            </div>
    )
}

export default Projects;
