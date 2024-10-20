// src/pages/admin/Contacts.js
import React, { useState, useEffect, useContext } from 'react';
import { Table, Button, Modal, Form, Pagination, Alert } from 'react-bootstrap';
import axios from '../../axiosConfig'; // Ensure you're using the configured axios instance
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom'; 

const Contacts = () => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate(); 
  const [contacts, setContacts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone_number: '', message: '' });
  const [error, setError] = useState('');
  const token = localStorage.getItem('token'); // Adjust based on where you store the token

  const fetchContacts = async (page = 1) => {
    try {
      const res = await axios.get(`/contact?page=${page}&limit=10`,{headers: {
        Authorization:token
      },});
      console.log(1);
                  
      setContacts(res.data.contacts);
      setTotalPages(res.data.totalPages);
      setCurrentPage(res.data.page);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch contacts.');
      if (err.response && (err.response.status === 401 || err.response.status === 403)) {
        // navigate('/admin/login'); // Redirect to login if unauthorized
      }
    }
  };

  useEffect(() => {
    if (!auth) {
      navigate('/admin/login');
    } else {
      fetchContacts();
    }
  }, [auth, navigate]);

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setFormData({ name: '', phone_number: '', message: '' });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/contact', formData);
      fetchContacts(currentPage);
      handleClose();
    } catch (err) {
      console.error(err);
      setError('Failed to add contact.');
      if (err.response && (err.response.status === 401 || err.response.status === 403)) {
        navigate('/admin/login');
      }
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this contact?')) return;
    try {
      await axios.delete(`/contact/${id}`);
      fetchContacts(currentPage);
    } catch (err) {
      console.error(err);
      setError('Failed to delete contact.');
      if (err.response && (err.response.status === 401 || err.response.status === 403)) {
        navigate('/admin/login');
      }
    }
  };

  const paginationItems = [];
  for (let number = 1; number <= totalPages; number++) {
    paginationItems.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => fetchContacts(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <h2>Contacts</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Button variant="success" onClick={handleShow} className="mb-3">
        Add Contact
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={contact._id}>
              <td>{(currentPage - 1) * 10 + index + 1}</td>
              <td>{contact.name}</td>
              <td>{contact.phone_number}</td>
              <td>{contact.message}</td>
              <td>
                <Button variant="danger" size="sm" onClick={() => handleDelete(contact._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>{paginationItems}</Pagination>

      {/* Add Contact Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPhoneNumber" className="mt-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                value={formData.phone_number}
                onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mt-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-4">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Contacts;
