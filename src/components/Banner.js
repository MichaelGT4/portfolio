import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle, PersonDashFill } from "react-bootstrap-icons";
import BannerImg from '../assets/img/bannerImg.png'
import "animate.css"
import pdf from '../assets/docs/Michael-G-Tiburcio.pdf'
import TrackVisibility from "react-on-screen";

export function Banner (){
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState('')
    const [index, setIndex] = useState(1)
    const [delta, setDelta] = useState(300- Math.random() * 100)
    const period = 2000

    const toRotate = ["Web Developer", "Front-End Developer"]

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

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
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setIndex(1)
            setDelta(500)
        } else {
            setIndex(prevIndex => prevIndex + 1)
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <span className="tagline">Bienvenido a mi Portafolio</span>
                                <h1>{`Hi I'm Michael Gonzalez Tiburcio`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Front-End Developer" ]'></span><span className="wrap">{text}</span></h1>
                                <p>A passionated and enthusiastic frontend developer from Dominican Republic. Adept at contributing to a highly collaborative work environment, finding solutions and determining customer satisfaction.</p>
                                <a href={pdf}>Check my Resume<ArrowRightCircle/></a>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <img src={BannerImg} alt="Header Img" />
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}