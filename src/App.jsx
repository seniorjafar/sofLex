import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import AdminLogin from "./components/admin/AdminLogin";
import AdminDashboard from "./components/admin/AdminDashboard";
import Contacts from "./components/admin/Contacts";
import News from "./components/admin/News";
import PrivateRoute from "./components/PrivateRoute";
import Layout from "./components/Layout";
import Main from "./pages/home/home";
import About from "./pages/about/about";
import Product from "./pages/product/product";
import Contact from "./pages/Contact/Contact";
import Newsuser from "./pages/news/news";

const App = () => {
  const { t } = useTranslation();  // Tarjimani chaqiramiz

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Main />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/products" element={<Product />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/news" element={<Newsuser/>} />
      
      {/* Protected Admin Routes */}
      <Route
        path="/admin/*"
        element={
          <PrivateRoute>
            <Layout>
              <Routes>
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="news" element={<News />} />
                {/* Admin uchun noma'lum yo'llarni dashboardga yo'naltirish */}
                <Route path="*" element={<Navigate to="dashboard" replace />} />
              </Routes>
            </Layout>
          </PrivateRoute>
        }
      />

      {/* Noma'lum yo'llarni asosiy sahifaga yo'naltirish */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
