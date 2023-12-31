import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import contactImg from "../assets/img/contact.svg"

export function Contact(){
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',  
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails)
    const [buttonText, setButtonText] = useState("Send")
    const [status, setStatus] = useState({})

    function onFormUpdate(category, value){
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    async function handleSubmit (e){
        e.preventDefault();
        setButtonText("Sending...")
        let res = await fetch("https://portfolio-michaelgt4.vercel.app/contact", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDetails)
        })
        setButtonText("Send")
        let result = res.json()
        console.log(result)
        setFormDetails(formInitialDetails)
        if(res.status === 200){
            setStatus({success: true, message: "Message sent succesfully"})
        } else {
            setStatus({success: false, message: "Something went wrong, please try again."})
        }
    }

    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Me" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message && 
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}