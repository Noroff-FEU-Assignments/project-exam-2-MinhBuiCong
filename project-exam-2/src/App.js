import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import "./sass/style.scss";
//import components
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Hotels from "./components/admin/Hotels";
import AddHotel from "./components/admin/AddHotel";
import EditHotel from "./components/admin/EditHotel";
import Dashboard from "./components/admin/Dashboard";
import Navbar from "./components/layout/Nav";
// import Establishment from "./components/establishment/Establishment";
// import EstablishmentDetail from "./components/establishment/EstablishmentDetail";
import Contact from "./components/contact/Contact";
import EnquiryPage from "./components/enquiry/enquiry";
import Footer from "./components/home/components/Footer";
import HotelPage from "./components/hotels/HotelPage";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/hotels/:id" element={<EstablishmentDetail />} /> */}
          {/* <Route exact path="/hotels" element={<Establishment />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/enquiry" element={<EnquiryPage />} />
          <Route path="/hotels" element={<HotelPage />} />
          <Route exact path="/admin" element={<Dashboard />} />
          <Route exact path="/admin/hotels" element={<Hotels />} />
          <Route exact path="/admin/hotels/add" element={<AddHotel />} />
          <Route exact path="/admin/hotels/edit/:id" element={<EditHotel />} />
          <Route to="/" />
        </Routes>
        <Footer />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
