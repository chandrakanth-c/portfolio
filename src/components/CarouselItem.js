import {Carousel} from 'react-bootstrap';
import carousel1 from '../assets/carousel1.jpeg'
import carousel2 from '../assets/carousel2.jpeg'
import carousel3 from '../assets/carousel3.jpeg'
import carousel4 from '../assets/carousel4.jpeg'

function CarouselItem(){
    return(
        <div id="carouselItem">
            <Carousel>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    height="1000em"
                    src={carousel1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h5 className="headCaption">That servers a million purposes!</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    height="1000em"
                    src={carousel2}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h5 className="headCaption">Hey! What is good about a software that is not understood?</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                    className="d-block w-100 backend"
                    height="1000em"
                    src={carousel3}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h5 className="headCaption">Where the magic happens!</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    height="1000em"
                    src={carousel4}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h5 className="headCaption">The complete product! Ready to ship?</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselItem;