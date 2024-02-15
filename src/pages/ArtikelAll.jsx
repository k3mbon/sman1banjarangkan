import { Col, Container, Row } from 'react-bootstrap';
import Logo from '../assets/logo.png';
import ArtikelCard from '../components/smallcomponents/ArtikelCard';
import React, { useEffect, useState, } from "react";
import { useNavigate } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore';
import { db } from "../firebase"

function ArtikelAll() {
  const [posts, setPosts] = useState([]);

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

  return (
    <>
      <div className="homepage mt-2 mb-5">
        <header className="headerpage">
          <Container>
            <Row className="header-box d-flex align-items-center">
              <Col lg="9" className="">
                <h1 className="">Artikel SMA Negeri 1 Banjarangkan</h1>
              </Col>
              <Col lg="3" className=" d-flex justify-content-center mt-2 p-2">
                <img src={Logo} alt="logo-img" />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
      <Container className="mb-5">
        <div className="w-100 min-vh-100 mt-2 b-2">
          <Container className="shadow-sm p-3 mb-5 bg-body rounded">
            <Row className="header-box d-flex align-items-center gx-5 gy-5">
            {posts.slice(0,).map((post) => (
            <Col lg="4">
              <ArtikelCard key={post.id} post={post} />
            </Col>
            ))}
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
}

export default ArtikelAll;
