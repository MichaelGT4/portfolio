import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import WD from '../assets/img/development-web.svg'

export function Skills() {

    const array = [
        {
            id: 1,
            imgUrl: WD,
            description: "Web Development"
        },
        {
            id: 2,
            imgUrl: WD,
            description: "Front-End Development"
        
        },
        {
            id: 3,
            imgUrl: WD,
            description: "Back-End development"
        
        },
        {
            id: 4,
            imgUrl: WD,
            description: "Back-End development"
        
        }
    ]

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, magnam minima possimus iste sed voluptas accusamus saepe, distinctio maxime est architecto vel, odit facilis? Asperiores maxime aliquid iure quae dolorem? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam laborum perspiciatis nesciunt corrupti, laboriosam quidem aliquid quis maxime reprehenderit ullam mollitia sunt et harum veniam omnis est cumque adipisci deserunt!</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            {array.map((i) =>{
                                return(
                                    <div key={i.id} className="item">
                                        <img src={i.imgUrl} alt={i.description} />
                                        <h5>{i.description}</h5>
                                    </div>
                                )
                            })}
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
    
    
}