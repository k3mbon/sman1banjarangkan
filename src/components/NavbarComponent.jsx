import {
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';

const NavbarComponent = () => {
  return (
    <>
      <Navbar expand="lg" className="mb-3 bg-white">
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
                <Nav.Link>
                  <NavLink to="/">Home</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to="/visi">Visi, Misi Sekolah</NavLink>
                </Nav.Link>
                <NavDropdown
                  title="Profile"
                  id={`offcanvasNavbarDropdown-expand-$lg`}
                >
                  <NavDropdown.Item>
                    <NavLink to="/sejarah">Sejarah Sekolah</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink to="/mars">Mars</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink to="/profil">Profil Sekolah</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink to="/karakteristik">Karakteristik Sekolah</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink to="/identitas">Identitas Sekolah</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink to="/extra">Extra Kulikuler</NavLink>
                  </NavDropdown.Item>
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
