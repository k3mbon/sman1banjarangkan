import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ArtikelCard({ post }) {
  const navigate = useNavigate();

  const navigateToDetail = () => {
    navigate('/detailartikel');
  };

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  const truncatedJudul = truncateText(post.Judul, 30);
  const truncatedIsi = truncateText(post.Isi, 150);
  return (
    <Card onClick={navigateToDetail}>
      
      <Card.Body className='gambar'>
      <img variant="top" src={post.Gambar1} alt="Post Image" />
        <Card.Title>{truncatedJudul}</Card.Title>
        <Card.Text>{truncatedIsi}
        </Card.Text>
        <Button onClick={navigateToDetail} variant="primary">
          Pelajari Lebih Lanjut
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ArtikelCard;
