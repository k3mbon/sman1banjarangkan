import { Carousel, Col, Container, Row } from 'react-bootstrap';
import ArtikelCard from '../components/smallcomponents/ArtikelCard';

function DetailArtikel() {
  return (
    <>
      <Container className="mb-5 shadow rounded">
        <Row>
          <Col className="carousel-detail">
            <Carousel fade>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src="https://pixelprowess.com/i/carousel_flight.png"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src="https://pixelprowess.com/i/carousel_swamp.png"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src="https://pixelprowess.com/i/carousel_flight.png"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <h2>Ini Judul Artikelnya</h2>
            <p>
              Om Swastyastu, <br /> Assalamualaikum Warahmatullahi Wabarakatuh,{' '}
              <br />
              Salam Sejahtera bagi kita semua, <br />
              Salam Kebajikan Namo Budhaya Syalom,
              <br />
              Mengawali ikhtiar penyajian media yang akuntabel, saya sebagai
              Kepala Sekolah mengucapkan selamat datang kepada pengunjung
              terhormat di Website SMA Negeri 1 Banjarangkan. Informasi
              akuntabel yang dibutuhkan oleh pihak berkepentingan terhadap SMA
              Negeri 1 Banjarangkan, perlu kita sajikan untuk pemenuhan beragam
              kebutuhan informasi tentang aktivitas Pendidikan dalam arti
              seluas-luasnya bagi warga internal dan masyarakat umum. Informasi
              yang disuguhkan adalah hal mengenai berbagai kegiatan tentang
              sekolah yang sekiranya diperlukan oleh pihak-pihak terkait.
              Sebaliknya segala yang ada dalam suguhan Website kita, diharapkan
              dapat menjadi bahan baku masukan oleh pihak yang berkepentingan
              untuk pemajuan kualitas pelaksanaan Pendidikan di SMAN 1
              Banjarangkan. Semoga peluncuran website SMA Negeri 1 Banjarangkan
              ini secara relatif dapat memenuhi harapan dimaksud. Semoga pula
              website ini menjadi salah satu media online akuntabel bagi kita
              semua.
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="mb-5 shadow rounded">
        <Row>
          <Col>
            <h3>Artikel Lainnya</h3>
          </Col>
        </Row>
        <Row className="mt-1 py-2">
          <Col lg="3">
            <ArtikelCard />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default DetailArtikel;
