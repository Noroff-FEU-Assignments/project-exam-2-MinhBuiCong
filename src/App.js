import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./sass/style.scss";
//import components
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Navbar from "./components/layout/Nav";
import Contact from "./components/contact/Contact";
import EnquiryPage from "./components/enquiry/enquiry";
import Footer from "./components/home/components/Footer";
import HotelPage from "./components/hotels/HotelPage";
import Dashboard from "./components/admin/Dashboard";
import Establishment from "./components/establishment/Establishment";
import HotelDetail from "./components/hotels/HotelDetail";
import { getUsername } from "./components/auth/storage";
import AdminContact from "./components/admin/AdminContact";
import AdminEnquiry from "./components/admin/AdminEnquiry";

function App() {
  const ProtectedRoute = ({ user, children }) => {
    if (!user) {
      return <Navigate to="/" />;
    }
    return children;
  };

  const [loggedIn, setLoggedIn] = useState(() => false || !!getUsername());

  return (
    <Router>
      <Navbar loggedIn={loggedIn} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enquiry" element={<EnquiryPage />} />
        <Route
          path="/admin/enquiry"
          element={
            <ProtectedRoute user={getUsername()}>
              <AdminEnquiry />
            </ProtectedRoute>
          }
        />
        <Route path="/hotels" element={<HotelPage />} />
        <Route path="/hotel-detail/:id" element={<HotelDetail />} />
        <Route
          path="/admin/establishment"
          element={
            <ProtectedRoute user={getUsername()}>
              <Establishment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/contact"
          element={
            <ProtectedRoute user={getUsername()}>
              <AdminContact />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/admin"
          element={
            <ProtectedRoute user={getUsername()}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route to="/" />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
