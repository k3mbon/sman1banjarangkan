import Logo from '../assets/logo.png';
import Kepsek from '../assets/kepsek1.png';
import ArtikelCard from '../components/smallcomponents/ArtikelCard';
import FotoAwal from '../components/smallcomponents/FotoAwal';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Prestasi from '../components/smallcomponents/Prestasi';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import React, { useEffect, useState, } from "react";
import { useNavigate } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore';
import { db } from "../firebase"

const HomePage = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [agendas, setAgendas] = useState([]);
  const [prestasis, setPrestasis] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'posts'));
        const postsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(postsList);
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
    };
    fetchPosts();
  }, []);
  
  useEffect(() => {
    const fetchAgendas = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'agenda'));
        const agendaList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAgendas(agendaList);
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
    };
    fetchAgendas();
  }, []);

  useEffect(() => {
    const fetchPrestasis = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'prestasi'));
        const prestasiList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPrestasis(prestasiList);
      } catch (error) {
        console.error("Error fetching prestasi: ", error);
      }
    };
    fetchPrestasis();
  }, []);

  const navigateToAllArtikel = () => {
    navigate('/semuaartikel');
  };

  const maxCards = 6;

  return (
    <>
      <div className="homepage">
        <header className="w-100 min-vh-100">
          <Container>
            <Row className="header-box d-flex align-items-center">
              <Col lg="6" className="">
                <h2 className="">Website</h2>
                <h1 className="">SMA NEGERI 1 BANJARANGKAN</h1>
                <h3 className="text-center">
                  Berkarakter Cerdas, dan Berbudaya sesuai Profil Pelajar
                  Pancasila
                </h3>
              </Col>
              <Col lg="6" className=" d-flex justify-content-center mt-2 p-2">
                <img src={Logo} alt="logo-img" />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
      <FotoAwal />

      <div className="selamat-datang ">
        <Container className="shadow-sm p-3 mb-5 bg-body rounded ">
          <Row data-aos="fade-up">
            <Col className="text-center mt-2">
              {' '}
              <h1>Selamat Datang di Website SMA N 1 BANJARANGKAN</h1>
            </Col>
          </Row>
          <Row
            className="d-flex align-items-center"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <Col className="mt-2 kepsek" lg="4">
              <img src={Kepsek} alt="img-kepsek" />
            </Col>
            <Col className="" lg="8">
              <p>
                Om Swastyastu, <br /> Assalamualaikum Warahmatullahi
                Wabarakatuh, <br />
                Salam Sejahtera bagi kita semua, <br />
                Salam Kebajikan Namo Budhaya Syalom,
                <br />
                Mengawali ikhtiar penyajian media yang akuntabel, saya sebagai
                Kepala Sekolah mengucapkan selamat datang kepada pengunjung
                terhormat di Website SMA Negeri 1 Banjarangkan. Informasi
                akuntabel yang dibutuhkan oleh pihak berkepentingan terhadap SMA
                Negeri 1 Banjarangkan, perlu kita sajikan untuk pemenuhan
                beragam kebutuhan informasi tentang aktivitas Pendidikan dalam
                arti seluas-luasnya bagi warga internal dan masyarakat umum.
                Informasi yang disuguhkan adalah hal mengenai berbagai kegiatan
                tentang sekolah yang sekiranya diperlukan oleh pihak-pihak
                terkait. Sebaliknya segala yang ada dalam suguhan Website kita,
                diharapkan dapat menjadi bahan baku masukan oleh pihak yang
                berkepentingan untuk pemajuan kualitas pelaksanaan Pendidikan di
                SMAN 1 Banjarangkan. Semoga peluncuran website SMA Negeri 1
                Banjarangkan ini secara relatif dapat memenuhi harapan dimaksud.
                Semoga pula website ini menjadi salah satu media online
                akuntabel bagi kita semua.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="w-100 min-vh-100 mt-2 b-2 artikel-terbaru">
        <Container
          className="shadow-sm p-3 mb-5 bg-body rounded"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <Row>
            <Col className="text-center mt-2">
              {' '}
              <h1>ARTIKEL TERBARU</h1>
            </Col>
          </Row>
          <Row
            className="header-box d-flex align-items-center gx-5 gy-5"
            data-aos="fade-up"
          >
            {posts.slice(0, maxCards).map((post) => (
            <Col lg="4">
              <ArtikelCard key={post.id} post={post} />
            </Col>
            ))}
          </Row>
          <Row className="mt-5">
            <Col>
              <Button onClick={navigateToAllArtikel} variant="primary">
                Lihat Semua Artikel
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container className="shadow-sm p-3 mb-5 bg-body rounded">
          <Row>
            <Col className="text-center mt-2">
              {' '}
              <h1>PRESTASI SMA N 1 BANJARANGKAN</h1>
            </Col>
          </Row>
          <Row
            className="header-box d-flex align-items-center gx-5 gy-5"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            {prestasis.slice(0, maxCards).map((prestasi) => (
            <Col lg="4">
              <Prestasi key={prestasi.id} prestasi={prestasi} />
            </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div>
        <Container className="shadow-sm p-3 mb-5 bg-body rounded">
          <Row>
            <Col className="text-center mt-2">
              {' '}
              <h1>Agenda Sekolah</h1>
            </Col>
          </Row>
          <Row
            className="header-box d-flex align-items-center gx-5 gy-5"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
             {agendas.slice(0, maxCards).map((agenda) => (
                <Card key={agenda.id}>
                  <Card.Header>{agenda.judul}</Card.Header>
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p>{agenda.isi}</p>
                      <footer className="blockquote-footer">
                        {agenda.tanggal ? agenda.tanggal.toDate().toLocaleDateString() : 'No date'}
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Card>
              ))}
          </Row>
        </Container>
      </div>
      <div>
        <Container
          className="shadow-sm p-3 mb-5 bg-body rounded"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              <Calendar />
            </Col>
            <Col lg="6">
              <div className="google-map-code">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d126258.31161341842!2d115.28308807639708!3d-8.540841297425288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x2dd216b834441fab%3A0x515f438db632e16b!2sF958%2BM55%2C%20Tusan%2C%20Banjarangkan%2C%20Klungkung%20Regency%2C%20Bali%2080752!3m2!1d-8.540849999999999!2d115.36549!5e0!3m2!1sen!2sid!4v1707832285738!5m2!1sen!2sid"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  aria-hidden="false"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HomePage;
