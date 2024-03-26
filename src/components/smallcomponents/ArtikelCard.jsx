import { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import ReactHtmlParser from 'html-react-parser'; // Import ReactHtmlParser

function ArtikelCard({ post }) {
  const navigate = useNavigate();
  const [thumbnailSrc, setThumbnailSrc] = useState('');
  const [textContent, setTextContent] = useState('');

  const truncateText = (text, maxLength) => {
    if (text && text.length > maxLength) {
      const truncatedText = text.slice(0, maxLength);
      const lastSpaceIndex = truncatedText.lastIndexOf(' ');
      if (lastSpaceIndex !== -1) {
        return truncatedText.slice(0, lastSpaceIndex) + '...';
      } else {
        return truncatedText + '...';
      }
    } else {
      return text;
    }
  };

  useEffect(() => {
    const extractFirstImage = (htmlContent) => {
      const imgRegex = /<img[^>]+src="?([^"\s]+)"?\s*\/*>/g;
      const match = imgRegex.exec(htmlContent);
      if (match && match[1]) {
        return match[1];
      }
      return null;
    };

    if (post && post.isi) {
      const imageUrl = extractFirstImage(post.isi);
      if (imageUrl) {
        setThumbnailSrc(imageUrl);
        const textWithoutImage = post.isi.replace(/<img[^>]+>/g, ''); // Remove image tags from isi
        setTextContent(textWithoutImage);
      } else {
        setTextContent(post.isi); // If no image found, use full isi content
      }
    }
  }, [post]);

  const navigateToDetail = () => {
    if (post && post.id) {
      navigate(`/detailartikel/${post.id}`);
    } else {
      console.error('Invalid post object:', post);
    }
  };

  const truncatedjudul = post ? truncateText(post.judul, 30) : '';

  return (
    <Card>
      <Link to={`/detailartikel/${post?.id}`} className="card-link text-decoration-none">
        <Card.Body className="gambar">
          {thumbnailSrc && <img src={thumbnailSrc} alt="Post Thumbnail" className="w-100" />}
          <Card.Title>{truncatedjudul}</Card.Title>
          {/* Use ReactHtmlParser to parse the HTML content */}
          <Card.Text>{ReactHtmlParser(truncateText(textContent, 120))}</Card.Text>
          <Button onClick={navigateToDetail} variant="primary">
            Pelajari Lebih Lanjut
          </Button>
        </Card.Body>
      </Link>
    </Card>
  );
}

export default ArtikelCard;
