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
                    src={carousel1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <p className="caption">Don't be mean, just go green</p>
                    <h5 className="headCaption">GREENER</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={carousel2}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <p className="caption">Welcome to the green team</p>
                    <h5 className="headCaption">GREENER</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={carousel3}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <p className="caption">Take a stand for the love of green</p>
                    <h5 className="headCaption">GREENER</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                    src={carousel4}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <p className="caption">Go green - stop pretending actions don't have consequences</p>
                    <h5 className="headCaption">GREENER</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselItem;