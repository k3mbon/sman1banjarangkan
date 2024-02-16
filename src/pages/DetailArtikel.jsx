import React, { useEffect, useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import ArtikelCard from '../components/smallcomponents/ArtikelCard';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

function DetailArtikel() {
  const { postId } = useParams();
  const [postDetails, setPostDetails] = useState(null);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const postDoc = await getDoc(doc(db, 'posts', postId));
        if (postDoc.exists()) {
          setPostDetails(postDoc.data());
        } else {
          console.error('Post not found');
        }
      } catch (error) {
        console.error('Error fetching post details: ', error);
      }
    };

    fetchPostDetails();
  }, [postId]);


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
            {postDetails ? (
        <>
          <h2>{postDetails.Judul}</h2>
          <p>{postDetails.Isi}</p>
          <img src={postDetails.Gambar1} alt="Post Image" />
        </>
      ) : (
        <p>Loading...</p>
      )}
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
