import {Nav, Col, Container, Row, Tab } from "react-bootstrap";
import { ProjectCards } from "./ProjectCards";
import TrackVisibility from "react-on-screen";
import 'animate.css'
import VLB from "../assets/img/Books-VirtualLibrary.png"
import imgUrl from "../assets/img/animated-programmer.gif"

export function Projects (){

    const allMyProjects = [
        {
            title: "PharmacyApp",
            description: "React Native",
            imgUrl: imgUrl,
            code: "https://github.com/MichaelGT4/PharmacyApp"
        },
        {
            title: "Virtual Library",
            description: "VueJS",
            imgUrl: VLB,
            code: "https://github.com/MichaelGT4/BibliotecaVue"
        },
    ]

    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({isVisible}) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <h2>Projects</h2>
                                <p>Here are some projects that I have made/contributed throughout my career as a Front-End Developer.</p>
                                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                            </Nav.Item>
                                        </Nav> */}
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__bounce" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row className="justify-content-center">
                                                    {allMyProjects.map((project, index) =>{
                                                        return(
                                                            <ProjectCards key={index} {...project} />
                                                        )
                                                    })
                                                    }
                                                </Row>

                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                Lorem Ipsum
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                Lorem Ipsum
                                            </Tab.Pane>
                                        </Tab.Content>
                                </Tab.Container>
                            </div>
                            }
                        </TrackVisibility>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}