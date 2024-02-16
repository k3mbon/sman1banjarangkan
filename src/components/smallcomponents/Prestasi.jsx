import { Card } from 'react-bootstrap';

function Prestasi({prestasi}) {
  return (
    <Card style={{ width: '18rem' }}>
      <img variant="top" src={prestasi.imageUrl} alt="Post Image" />
      <Card.Body>
        <Card.Title>{prestasi.title}</Card.Title>
        <Card.Text>
        {prestasi.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Prestasi;
