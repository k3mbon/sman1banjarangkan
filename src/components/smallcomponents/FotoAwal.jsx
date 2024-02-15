import { Carousel } from 'react-bootstrap';

function FotoAwal() {
  return (
    <div className="foto-awal">
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
    </div>
  );
}

export default FotoAwal;
