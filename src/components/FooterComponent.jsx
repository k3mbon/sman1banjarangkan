import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faGlobe,
  faHome,
  faMailBulk,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/logo.png';

const divComponent = () => {
  return (
    <>
      <Container className="text-center text-lg-start bg-body-tertiary text-muted">
        <Row className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <Col lg="6">
            <div className="me-5 d-none d-lg-block">
              <h4>Ikuti sosial media kami:</h4>
            </div>
          </Col>
          <Col lg="6" className="d-flex justify-content-around">
            <NavLink
              className=""
              to="https://www.facebook.com/profile.php?id=100095559401882"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" color="blue" />
            </NavLink>
            <NavLink
              className=""
              to="https://www.instagram.com/officialbasma_?igsh=Mzg3eWh5ZHpkZ3B0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" color="red" />
            </NavLink>
            <NavLink
              className=""
              to="https://www.youtube.com/@basma-smanegeri1banjarangk42"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} size="2x" color="red" />
            </NavLink>
          </Col>
        </Row>
        <Container className="text-center text-md-start mt-5">
          <Row className="mt-3">
            <Col lg="6" className="mx-auto mb-4 logo-footer">
              <img src={Logo} alt="logo-img" />
              <h6 className="text-uppercase fw-bold mb-4">
                SMA N 1 Banjarangkan
              </h6>
              <p>
                Berkarakter Cerdas, dan Berbudaya sesuai Profil Pelajar
                Pancasila
              </p>
            </Col>
            <Col lg="6">
              <h6 className="text-uppercase fw-bold mb-4 mx-auto">Contact</h6>
              <p>
                <FontAwesomeIcon
                  icon={faHome}
                  size="lg"
                  color="#00aff0"
                ></FontAwesomeIcon>
                {'  '} Desa Tusan, Kecamatan Banjarangkan, Kabupaten Klungkung
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faPhone}
                  size="lg"
                  color="#00aff0"
                ></FontAwesomeIcon>
                {'  '} (0366) 22961
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faGlobe}
                  size="lg"
                  color="#00aff0"
                ></FontAwesomeIcon>
                {'  '} sman1banjarangkan.sch.id
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faMailBulk}
                  size="lg"
                  color="#00aff0"
                ></FontAwesomeIcon>
                {'  '} basmaku01@gmail.com
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col className="text-center mt-2">© 2024 Copyright</Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default divComponent;
