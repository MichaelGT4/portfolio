import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import WD from '../assets/img/development-web.svg'
import Reactjs from '../assets/img/reactjs-svgrepo-com.svg'
import CSS from '../assets/img/css-3-svgrepo-com.svg'
import GIT from '../assets/img/git-svgrepo-com.svg'
import HTML from '../assets/img/html-5-svgrepo-com.svg'
import GitHub from '../assets/img/github-color-svgrepo-com.svg'

export function Skills() {

    const array = [
        {
            id: 1,
            imgUrl: Reactjs,
            description: "React/React Native"
        },
        {
            id: 2,
            imgUrl: HTML,
            description: "HTML"
        
        },
        {
            id: 3,
            imgUrl: CSS,
            description: "CSS"
        
        },
        {
            id: 4,
            imgUrl: GIT,
            description: "Git"
        
        },
        {
            id: 4,
            imgUrl: GitHub,
            description: "GitHub"
        
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
                        <p>I have experience with these technologies</p>
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