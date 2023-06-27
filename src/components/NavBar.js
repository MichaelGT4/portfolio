import { useEffect, useState } from "react";
import { Nav, Navbar, Container }  from "react-bootstrap"
import Logo from '../assets/img/Logo.svg'
import GitHub from '../assets/img/github.svg'
import LinkedIn from '../assets/img/linkedin.svg'

export function NavBar(){
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        function onScroll() {
            if (window.scrollY > 50){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return() => window.removeEventListener("scroll", onScroll);
    }, [])

    function onUpdateActiveLink(value) {
        setActiveLink(value);
        
    }
    return(
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={Logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className={activeLink === "home" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === "skills" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Habilidades</Nav.Link>
                        <Nav.Link href="#project" className={activeLink === "projects" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Proyectos</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/michael-gt04/"><img src={LinkedIn} alt="" /></a>
                            <a href="https://github.com/MichaelGT4"><img src={GitHub} alt="" /></a>
                        </div>
                        <button className="vvd" onClick={() => console.log("Connect")}><span>Let's connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}