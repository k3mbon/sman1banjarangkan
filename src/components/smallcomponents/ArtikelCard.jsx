import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function ArtikelCard({ post }) {
  const navigate = useNavigate();

  const navigateToDetail = () => {
    // Check if 'post' and 'id' are defined before navigating
    if (post && post.id) {
      navigate(`/detailartikel/${post.id}`);
    } else {
      console.error("Invalid post object:", post);
    }
  };

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  // Check if 'post' is defined before accessing its properties
  const truncatedJudul = post ? truncateText(post.Judul, 30) : '';
  const truncatedIsi = post ? truncateText(post.Isi, 150) : '';

  return (
    <Card>
      {/* Use 'Link' directly around the Card component */}
      <Link to={`/detailartikel/${post?.id}`} className="card-link">
        <Card.Body className='gambar'>
          <img variant="top" src={post?.Gambar1} alt="Post Image" />
          <Card.Title>{truncatedJudul}</Card.Title>
          <Card.Text>{truncatedIsi}</Card.Text>
          <Button onClick={navigateToDetail} variant="primary">
            Pelajari Lebih Lanjut
          </Button>
        </Card.Body>
      </Link>
    </Card>
  );
}

export default ArtikelCard;
