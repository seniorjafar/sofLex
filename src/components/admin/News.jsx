import React, { useState, useEffect, useContext } from 'react';
import { Table, Button, Modal, Form, Pagination, Alert } from 'react-bootstrap';
import axios from '../../axiosConfig';
import { AuthContext } from '../../contexts/AuthContext';

const News = () => {
  const { auth } = useContext(AuthContext);
  const [news, setNews] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    link: '',
    status: false,
  });
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState('');
  const [isEditMode, setIsEditMode] = useState(false); // New state to track edit mode
  const [currentNewsId, setCurrentNewsId] = useState(null); // To store the ID of the news being edited

  const fetchNews = async (page = 1) => {
    try {
      const res = await axios.get(`/news?page=${page}&limit=10`);
      setNews(res.data.news || []);
      setTotalPages(res.data.totalPages || 1);
      setCurrentPage(res.data.page || 1);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch news');
      setNews([]);
    }
  };

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line
  }, []);

  const handleShow = () => {
    setShow(true);
    setIsEditMode(false); // Ensure we are in add mode by default
  };

  const handleClose = () => {
    setShow(false);
    setFormData({ title: '', description: '', link: '', status: false });
    setImageFile(null);
    setError('');
    setIsEditMode(false); // Reset edit mode on close
    setCurrentNewsId(null); // Reset current news ID
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  // Handle form submission for both add and update
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('link', formData.link);
    formDataToSend.append('status', formData.status);
    if (imageFile) {
      formDataToSend.append('image', imageFile);
    }

    try {
      if (isEditMode) {
        // Update existing news
        await axios.put(`/news/${currentNewsId}`, formDataToSend, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      } else {
        // Add new news
        await axios.post('/news', formDataToSend, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      }
      fetchNews(currentPage);
      handleClose();
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to submit news');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this news?')) return;
    try {
      await axios.delete(`/news/${id}`);
      fetchNews(currentPage);
    } catch (err) {
      console.error(err);
      setError('Failed to delete news');
    }
  };

  const handleStatusToggle = async (id, currentStatus) => {
    try {
      await axios.patch(`/news/${id}/status`, { status: !currentStatus });
      fetchNews(currentPage);
    } catch (err) {
      console.error(err);
      setError('Failed to update status');
    }
  };

  const handleEdit = (newsItem) => {
    setFormData({
      title: newsItem.title,
      description: newsItem.description,
      link: newsItem.link,
      status: newsItem.status,
    });
    setCurrentNewsId(newsItem._id); // Set the current news ID
    setShow(true);
    setIsEditMode(true); // Set to edit mode
  };

  const paginationItems = [];
  for (let number = 1; number <= totalPages; number++) {
    paginationItems.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => fetchNews(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <h2>News</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Button variant="success" onClick={handleShow} className="mb-3">
        Add News
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Link</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(news) && news.length > 0 ? (
            news.map((item, index) => (
              <tr key={item._id}>
                <td>{(currentPage - 1) * 10 + index + 1}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.link}</td>
                <td>{item.status ? 'Active' : 'Inactive'}</td>
                <td>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleEdit(item)} // Trigger edit mode
                    className="me-2"
                  >
                    Edit
                  </Button>
                  <Button
                    variant={item.status ? 'warning' : 'success'}
                    size="sm"
                    onClick={() => handleStatusToggle(item._id, item.status)}
                    className="me-2"
                  >
                    {item.status ? 'Deactivate' : 'Activate'}
                  </Button>
                  <Button variant="danger" size="sm" onClick={() => handleDelete(item._id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No news available.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <Pagination>{paginationItems}</Pagination>

      {/* Add/Edit News Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isEditMode ? 'Edit News' : 'Add News'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group controlId="formDescription" className="mt-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group controlId="formLink" className="mt-3">
              <Form.Label>Link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter link"
                value={formData.link}
                onChange={(e) => setFormData({ ...formData, link: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formImage" className="mt-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                required={!isEditMode} // Require image only for add mode
              />
            </Form.Group>

            <Form.Group controlId="formStatus" className="mt-3">
              <Form.Check
                type="checkbox"
                label="Active Status"
                checked={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.checked })}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-4">
              {isEditMode ? 'Update' : 'Submit'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default News;
