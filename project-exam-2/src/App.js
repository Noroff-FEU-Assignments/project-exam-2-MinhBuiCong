import React from "react";
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
import { getUsername } from "./components/auth/storage";

function App() {
  console.log("hello");
  const ProtectedRoute = ({ user, children }) => {
    if (!user) {
      return <Navigate to="/" />;
    }
    return children;
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enquiry" element={<EnquiryPage />} />
        <Route path="/hotels" element={<HotelPage />} />
        <Route
          path="/admin/establishment"
          element={
            <ProtectedRoute user={getUsername()}>
              <Establishment />
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
