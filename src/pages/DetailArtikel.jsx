import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ArtikelCard from '../components/smallcomponents/ArtikelCard';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase';
import Logo from '../assets/logo.png';

function DetailArtikel() {
  const { postId } = useParams();
  const [postDetails, setPostDetails] = useState(null);
  const [posts, setPosts] = useState([]);
  const maxCards = 6;

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
        console.error('Error fetching posts: ', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      <div className="homepage mt-2">
        <header className="headerpage">
          <Container>
            <Row className="header-box d-flex align-items-center">
              <Col lg="9" className="">
                <h1 className="">Artikel</h1>
                {postDetails ? (
                  <>
                    <h2>{postDetails.judul}</h2>
                  </>
                ) : (
                  <p>Loading...</p>
                )}
              </Col>
              <Col lg="3" className=" d-flex justify-content-center mb-2 p-2">
                <img src={Logo} alt="logo-img" />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
      <Container className="mt-5 shadow rounded detail-artikel">
        {/*<Row>
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
        </Row>*/}
        <Row className="mt-2 py-5">
          <Col>
            {postDetails ? (
              <>
                <h2>{postDetails.judul}</h2>
                {postDetails.Gambar1 && (
                  <img
                    className="mx-auto d-block"
                    src={postDetails.Gambar1}
                    alt="Post Image"
                  />
                )}
                {postDetails.isi && (
                  <div
                    className="mt-5"
                    dangerouslySetInnerHTML={{ __html: postDetails.isi }}
                  />
                )}
              </>
            ) : (
              <p>Loading...</p>
            )}
          </Col>
        </Row>
      </Container>
      <Container className="my-5 shadow rounded">
        <Row>
          <Col className="p-2">
            <h3>Artikel Lainnya</h3>
          </Col>
        </Row>
        <Row className="mt-1 py-2 d-flex">
          {posts.slice(0, maxCards).map((post) => (
            <Col lg="4" key={post.id}>
              <ArtikelCard post={post} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default DetailArtikel;
