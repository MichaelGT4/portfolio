import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import Gif from '../assets/img/coding-animated-laptop-flow-stream-ja04010rm5o68zfk.gif'
import { useEffect, useState } from "react";

export function Banner (){
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300- Math.random() * 100);
    const period = 2000;

    const toRotate = ["Web Developer", "Front-End Developer"]

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => {clearInterval(ticker)};
    },[text])

    function tick(){
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Bienvenido a mi Portafolio</span>
                        <h1>{`Hi I'm Michael Gonzalez Tiburcio`} <span className="wrap">{text}</span></h1>
                        <p>A passionate and enthusiastic frontend developer from Dominican Republic. Adept at contributing to a highly collaborative work environment, finding solutions and determining customer satisfaction.</p>
                        <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={Gif} alt="Header Img" />
                    </Col>
                </Row>
            </Container>

        </section>
    )
}