import { Col, Container, Row, Table } from 'react-bootstrap';
import Logo from '../assets/logo.png';
function ExtraPage() {
  return (
    <>
      <div className="homepage mt-2 mb-5">
        <header className="headerpage">
          <Container>
            <Row className="header-box d-flex align-items-center">
              <Col lg="9" className="">
                <h1 className="">
                  Extrakulikuler di SMA Negeri 1 Banjarangkan
                </h1>
              </Col>
              <Col lg="3" className=" d-flex justify-content-center mt-2 p-2">
                <img src={Logo} alt="logo-img" />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
      <Container className="mb-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No.</th>
              <th>Nama Ekstrakurikuler</th>
              <th>Kompetensi Profil Pelajar Pancasila</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                Kerohanian: <br />• Pesantian
              </td>
              <td>
                <ol className="list-group-numbered borderless">
                  <ul className="list-group-item">
                    Beriman, bertaqwa kepada Tuhan YME dan berakhlak mulia
                  </ul>
                  <ul className="list-group-item">
                    Berkebhinekaan global, saling berkaitan dan saling mendukung
                  </ul>
                  <ul className="list-group-item">Kreatif</ul>
                </ol>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                Ilmu Pengetahuan dan Teknologi
                <br />
                • Geo-Sains <br />
                • KSPM-Ekonomi/Akuntansi
                <br />
                • KSPM-Fisika
                <br />
                • KSPM-Kimia
                <br />
                • KSPM-Biologi
                <br />
                • KSPM-Astronomi <br />
                • KSPM-Matematika
                <br />
                • English Club <br />
                • Japanese Club
                <br />
                • Komputer
                <br />• KIR
              </td>
              <td>
                1. Bernalar kritis
                <br />
                2. Kreatif
                <br />
                3. Mandiri
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                Olahraga
                <br />
                • Atletik
                <br />
                • Panjat tebing <br />
                • Sepak bola
                <br />
                • Basket
                <br />
                • Futsal
                <br />
                • Voli
                <br />
                • Bela diri
                <br />• Catur
              </td>
              <td>
                1. Mandiri
                <br />
                2. Bergotong royong
                <br />
                3. Berkebhinekaan global saling berkaitan dan saling mendukung
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                Seni
                <br />
                • Tari <br />
                • Musik dan Vocal
                <br />
                • Tabuh <br />• Lukis
              </td>
              <td>
                1. Berkebhinekaan global saling berkaitan dan saling mendukung
                <br />
                2. Mandiri
                <br />
                3. Kreatif
                <br />
                4. Gotong Royong
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                Jurnalistik
                <br />• PRAKARSA
              </td>
              <td>
                1. Berkebhinekaan global saling berkaitan dan saling mendukung
                <br />
                2. Bernalar kritis
                <br />
                3. Kreatif
                <br />
                4. Gotong Royong
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>
                Kesehatan dan Kegiatan Sosial <br />
                • PMR <br />
                • UKS <br />
                • PIK-R <br />
                • PEER Konselor <br />• KSPAN
              </td>
              <td>
                1. Berkebhinekaan global saling berkaitan dan saling mendukung
                <br />
                2. Gotong royong
                <br />
                3. Mandiri
                <br />
                4. Kreatif
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>
                Kepemimpinan <br />
                • PRAMUKA
                <br />
                • WAGANA
                <br />
                • LKBB
                <br />• PPB
              </td>
              <td>
                1. Beriman, bertaqwa kepada Tuhan YME dan berakhlak mulia
                <br />
                2. Mandiri
                <br />
                3. Bernalar kritis
                <br />
                4. Berkebhinekaan global saling berkaitan dan saling mendukung
                <br />
                5. Gotong royong
                <br />
                6. Kreatif
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default ExtraPage;
