import { Col, Container, Row } from 'react-bootstrap';
import Logo from '../assets/logo.png';

function MarsPage() {
  return (
    <>
      <div className="homepage mt-2 mb-5">
        <header className="headerpage">
          <Container>
            <Row className="header-box d-flex align-items-center">
              <Col lg="9" className="">
                <h1 className="">Mars SMA Negeri 1 Banjarangkan</h1>
              </Col>
              <Col lg="3" className=" d-flex justify-content-center mt-2 p-2">
                <img src={Logo} alt="logo-img" />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
      <Container className="mb-5">
        <Row className="d-flex align-items-center justify-items-center">
          <Col>
            <iframe
              src="https://www.youtube.com/embed/Ok8iZU_Dzl4"
              allow="autoplay"
              allowfullscreen
              title="video"
              width="100%"
              height="560"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MarsPage;
