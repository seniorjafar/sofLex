// src/pages/admin/AdminDashboard.js
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const AdminDashboard = () => {
  return (
    <div>
      <h1>Welcome to the Admin Dashboard</h1>
      <Row className="mt-4">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Manage Contacts</Card.Title>
              <Card.Text>
                View, add, edit, and delete contacts.
              </Card.Text>
              <Card.Link href="/admin/contacts">Go to Contacts</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Manage News</Card.Title>
              <Card.Text>
                View, add, edit, and delete news.
              </Card.Text>
              <Card.Link href="/admin/news">Go to News</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Manage Admins</Card.Title>
              <Card.Text>
                View, add, edit, and delete admin users.
              </Card.Text>
              <Card.Link href="/admin/admins">Go to Admins</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AdminDashboard;
