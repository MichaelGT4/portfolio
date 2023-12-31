import { Col } from "react-bootstrap";


export function ProjectCards({title, description, imgUrl, code}) {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt={title} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <a href={code} className="">Code</a>
                </div>
            </div>
        </Col>
    )
}