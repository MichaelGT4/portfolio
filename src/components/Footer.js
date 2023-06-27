import { Col, Container, Row } from "react-bootstrap";
import Logo from "../assets/img/Logo.svg"
import GitHub from '../assets/img/github.svg'
import LinkedIn from '../assets/img/linkedin.svg'

export function Footer(){
    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={3}>
                        <img src={Logo} alt="Logo" />
                    </Col>
                    <Col sm={9} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/michael-gt04/"><img src={LinkedIn} alt="LinkedIn" /></a>
                            <a href="https://github.com/MichaelGT4"><img src={GitHub} alt="GitHub" /></a>
                        </div>
                        <p>CopyRight 2023. All Rights Reserved</p>
                    </Col>
                </Row>

            </Container>
        </footer>
    )
}