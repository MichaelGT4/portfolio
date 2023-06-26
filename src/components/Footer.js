import { Col, Container, Row } from "react-bootstrap";
import Logo from "../assets/img/Logo.svg"
import GitHub from '../assets/img/github.svg'
import LinkedIn from '../assets/img/linkedin.svg'

export function Footer(){
    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src={Logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="#"><img src={LinkedIn} alt="LinkedIn" /></a>
                            <a href="#"><img src={GitHub} alt="GitHub" /></a>
                        </div>
                    </Col>
                </Row>

            </Container>
        </footer>
    )
}