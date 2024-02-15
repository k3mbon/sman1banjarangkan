import { Col, Container, Row } from 'react-bootstrap';
import Logo from '../assets/logo.png';

function IdentitasPage() {
  return (
    <>
      <div className="homepage mt-2">
        <header className="headerpage">
          <Container>
            <Row className="header-box d-flex align-items-center">
              <Col lg="9" className="">
                <h1 className="">Identitas SMA Negeri 1 Banjarangkan</h1>
              </Col>
              <Col lg="3" className=" d-flex justify-content-center mt-2 p-2">
                <img src={Logo} alt="logo-img" />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
      <Container className="mt-5 mb-5">
        <Row>
          <Col lg="4">
            <h4>1. Nama Sekolah</h4>
          </Col>
          <Col lg="8">
            <h4>SMA Negeri 1 Banjarangkan</h4>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <h4>2. No. Statistik Sekolah</h4>
          </Col>
          <Col lg="8">
            <h4>3 0 1 2 2 0 6 0 1 0 0 1</h4>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <h4>3. No. Pokok Sekolah Nasional</h4>
          </Col>
          <Col lg="8">
            <h4>5 0 1 0 2 3 7 9</h4>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <h4>4. Tipe Sekolah</h4>
          </Col>
          <Col lg="8">
            <h4>C</h4>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <h4>5. Alamat Sekolah</h4>
          </Col>
          <Col lg="8">
            <h4>Desa Tusan, Kecamatan Banjarangkan, Kabupaten Klungkung</h4>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <h4>6. Telepon/Fax</h4>
          </Col>
          <Col lg="8">
            <h4>(0366) 22961</h4>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <h4>7. Website</h4>
          </Col>
          <Col lg="8">
            <h4>sman1banjarangkan.sch.id</h4>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <h4>8. email</h4>
          </Col>
          <Col lg="8">
            <h4>basmaku01@gmail.com</h4>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <h4>9. Status Sekolah</h4>
          </Col>
          <Col lg="8">
            <h4>Negeri</h4>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <h4>10. Luas Lahan/Tanah</h4>
          </Col>
          <Col lg="8">
            <h4>11.970 m2</h4>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <h4>11. Status Kepemilikan</h4>
          </Col>
          <Col lg="8">
            <h4>Sertifikat</h4>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <h4>12. Nama Kepala Sekolah</h4>
          </Col>
          <Col lg="8">
            <h4>I Dewa Gede Anom, S.Pd</h4>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <h4>13. Tingkat Pendidikan</h4>
          </Col>
          <Col lg="8">
            <h4>Sarjana</h4>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <h4>14. Nilai Akreditasi Sekolah</h4>
          </Col>
          <Col lg="8">
            <h4>88,63 (A)</h4>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default IdentitasPage;
