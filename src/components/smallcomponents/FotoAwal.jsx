import React, { useEffect, useState } from "react";
import { Carousel } from 'react-bootstrap';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

function FotoAwal() {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchImageUrls = async () => {
      try {
        const imagesCollection = await getDocs(collection(db, "foto_carousel"));
        const urls = imagesCollection.docs.map((doc) => doc.data().Gambar1);
        setImageUrls(urls);
      } catch (error) {
        console.error("Error fetching image URLs: ", error);
      }
    };

    fetchImageUrls();
  }, []);


  return (
    <div className="foto-awal">
      <Carousel fade>
      {imageUrls.map((Gambar1, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={Gambar1}
            alt={`Slide ${index}`}
          />
          {/* You can add captions or other content for each slide here */}
        </Carousel.Item>
      ))}
      </Carousel>
    </div>
  );
}

export default FotoAwal;
