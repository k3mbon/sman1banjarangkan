import { Col, Container, Row } from 'react-bootstrap';
import Logo from '../assets/logo.png';

function VisiMisi() {
  return (
    <>
      <div className="homepage mt-2">
        <header className="headerpage">
          <Container>
            <Row className="header-box d-flex align-items-center">
              <Col lg="9" className="">
                <h1 className="">
                  Visi, Misi dan Tujuan SMA Negeri 1 Banjarangkan
                </h1>
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
          <Col>
            <h3>A. Visi SMA Negeri 1 Banjarangkan</h3>
            <p>
              Perkembangan dan tantangan masa depan seperti perkembangan ilmu
              pengetahuan dan teknologi; globalisasi yang sangat cepat; era
              informasi; dan berubahnya kesadaran masyarakat dan orang tua
              terhadap pendidikan memicu sekolah untuk merespon tantangan
              sekaligus peluang itu. SMA Negeri 1 Banjarangkan selain sebagai
              satuan pendidikan penyelenggara Kurikulum Merdeka Berubah, maka
              SMA Negeri 1 Banjarangkan mengembangkan Profil Pelajar Pancasila
              yang diinginkan diwujudkan dalam Visi sekolah sebagai berikut :{' '}
            </p>
            <h3 className="text-bold text-center">
              ”Berkarakter Cerdas, dan Berbudaya sesuai Profil Pelajar
              Pancasila“
            </h3>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h3>B. Misi SMA Negeri 1 Banjarangkan</h3>
            <ol className="list-group list-group-numbered borderless">
              <li className="list-group-item">
                Menumbuhkembangkan penghayatan terhadap ajaran agama/kepercayaan
                yang dianut.
              </li>
              <li className="list-group-item">
                Melaksanakan dan meningkatkan proses pembelajaran dan bimbingan
                akademik secara efektif untuk mengoptimalkan potensi peserta
                didik.
              </li>
              <li className="list-group-item">
                Mampu bersaing dan berkolaborasi dalam meningkatkan prestasi
                akademik dan non akademik.
              </li>
              <li className="list-group-item">
                Menumbuhkembangkan budaya bangsa sebagai sumber kearifan dalam
                berfikir, berkata, dan bertindak.
              </li>
              <li className="list-group-item">
                Meningkatkan kepedulian lingkungan untuk menumbuhkan rasa
                simpati dan empati.
              </li>
            </ol>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default VisiMisi;
