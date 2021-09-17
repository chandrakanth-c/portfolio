import {Card,Button} from 'react-bootstrap';
import './ProjectCard.css';

function ProjectCard(props){
    return(
        <div className="project-card">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} style={{height:'13rem'}} />
            <Card.Body>
            <Card.Title>
                <div className="project-title">
                    <p>{props.title}</p>
                </div>
            </Card.Title>
            <Card.Text>
                <div className="project-description">
                    <p><b><i>{props.line1}</i></b></p>
                    <p>{props.line2}</p>
                </div>
            </Card.Text>
            <a href={props.link} target="_blank" className="project-button">
                <Button variant="outline-secondary">
                    <div className="button-text">
                        Project files
                    </div>
                </Button>
            </a>
            </Card.Body>
            </Card>
        </div>
    )
}

export default ProjectCard;