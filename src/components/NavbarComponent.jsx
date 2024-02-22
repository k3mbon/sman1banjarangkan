import {
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const NavbarComponent = () => {
  return (
    <>
      <Navbar expand="lg" className="mb-3 mt-0 bg-white">
        <Container>
          <img className="" src={Logo} alt="img-logo" />
          <Navbar.Brand className="brand">
            <h2>SMA NEGERI 1 BANJARANGKAN</h2>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Offcanvas
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 text-md pe-3">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/visi">
                  Visi, Misi Sekolah
                </Nav.Link>
                <NavDropdown
                  title="Profile"
                  id={`offcanvasNavbarDropdown-expand-$lg`}
                >
                  <NavDropdown.Item as={Link} to="/sejarah">
                    Sejarah Sekolah
                  </NavDropdown.Item>
                  {/* ... other NavDropdown.Items */}
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
