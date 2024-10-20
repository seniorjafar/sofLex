import React, { useState, useEffect } from 'react';
import { Container, Row, Alert, Spinner } from 'react-bootstrap';
import axios from '../axiosConfig'; // Axios instance without token
import './newsle.css'; // Custom CSS for layout styling

const Newsbody = () => {
  const [newsList, setNewsList] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchNews = async () => {
    try {
      const res = await axios.get('/news');
      if (res.data && Array.isArray(res.data.news)) {
        setNewsList(res.data.news);
      } else {
        setNewsList([]);
      }
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch news.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <Container>
      <h2 className="my-4">Latest News</h2>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <Row>
        {newsList.length > 0 ? (
          <div className="news-list">
            {newsList.map((newsItem) => (
              <div className="news-item" key={newsItem._id}>
                <div className="news-content">
                  <h4 className="news-title">{newsItem.title}</h4>
                  <p className="news-description">{newsItem.description}</p>
                  {newsItem.link && (
                    <a href={newsItem.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      Read more
                    </a>
                  )}
                </div>
                <div className="news-image">
                  <img
                    src={"http://localhost:3000/" + newsItem.image}
                    alt={newsItem.title}
                    className="img-fluid"
                  />
                </div>
                <hr className="divider" />
              </div>
            ))}
          </div>
        ) : (
          <p>No news available.</p>
        )}
      </Row>
      
      )}
    </Container>
  );
};

export default Newsbody;
