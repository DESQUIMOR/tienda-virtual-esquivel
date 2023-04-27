
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'
function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Tienda Virtual</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" style={{ textDecoration: 'none', marginTop: '8px', color: 'grey' }}>Home</Link>
                        <NavDropdown title="Tienda" id="basic-nav-dropdown">
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <Link to="/category/mochilas" style={{ textDecoration: 'none', marginLeft: '16px', margin: '8px', color: 'black' }}>Mochilas</Link>
                                <Link to="/category/accesorios" style={{ textDecoration: 'none', marginLeft: '16px', margin: '8px', color: 'black' }}>Accesorios</Link>
                                <Link to="/category/gorras" style={{ textDecoration: 'none', marginLeft: '16px', margin: '8px', color: 'black' }}>Gorras</Link>
                            </div>
                        </NavDropdown>
                        <Link to="/about" style={{ textDecoration: 'none', marginTop: '8px', color: 'grey' }}>About</Link>
                    </Nav>
                </Navbar.Collapse>
                <Link to="/cart" style={{ textDecoration: 'none', marginTop: '8px', color: 'grey' }}><CartWidget/></Link>
            </Container>
        </Navbar>
    );
}

export default NavBar;
