import { Container, Nav, Navbar } from "react-bootstrap"

const FrontVar = () => (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/">recipe-app</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)

export default FrontVar;
