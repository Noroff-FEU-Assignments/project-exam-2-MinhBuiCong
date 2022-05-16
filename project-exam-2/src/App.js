import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enquiry" element={<EnquiryPage />} />
        <Route path="/hotels" element={<HotelPage />} />
        <Route path="/admin/establishment" element={<Establishment />} />
        <Route exact path="/admin" element={<Dashboard />} />
        <Route to="/" />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
