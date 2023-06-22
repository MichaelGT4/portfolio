import {Nav, Col, Container, Row, Tab } from "react-bootstrap";
import imgUrl from "../assets/img/animated-programmer.gif"
import { ProjectCards } from "./ProjectCards";

export function Projects (){

    const allMyProjects = [
        {
            title: "Qwerty",
            description: "Desarrollo",
            imgUrl: imgUrl
        },
        {
            title: "Qwerty",
            description: "Desarrollo",
            imgUrl: imgUrl
        },
        {
            title: "Qwerty",
            description: "Desarrollo",
            imgUrl: imgUrl
        }
    ]

    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti et aliquid natus nostrum voluptate dolorem ducimus soluta fugiat incidunt tenetur maxime autem quaerat modi voluptatum numquam, iure provident explicabo laborum.</p>
                       <Tab.Container id="projects-tab" defaultActiveKey="first">
                            <Nav variant="pills" defaultActiveKey="first">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
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

                    </Col>
                </Row>
            </Container>
        </section>
    )
}