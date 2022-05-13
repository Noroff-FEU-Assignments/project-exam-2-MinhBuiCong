// import React from "react";
// import "./sass/style.scss";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   NavLink,
// } from "react-router-dom";
// import DrinkDetail from "./components/home/DrinkDetail";
// import Contact from "./components/contact/Contact";
// import HotelList from "./components/home/HotelList";
// import Login from "./components/login/Login";
// import NavBar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
// import Admin from "./components/admin/Admin";

// function () {
//   return (
//     <Router>
//       <div>
//         <NavBar className="navbar" expand={false}>
//           <Container className="container">
//             <NavBar.Brand href="/">Holidaze</NavBar.Brand>
//             <NavBar.Toggle aria-controls="basic-navbar-nav" />
//             <NavBar.Collapse id="basic-navbar-nav">
//               <Nav className="me-auto">
//                 <NavLink className="link" to="/">
//                   Drinks
//                 </NavLink>
//                 <NavLink className="link" to="/login">
//                   Login
//                 </NavLink>
//                 <NavLink className="link" to="/contact">
//                   Contact
//                 </NavLink>
//               </Nav>
//             </NavBar.Collapse>
//           </Container>
//         </NavBar>
//         <Routes>
//           <Route exact path="/" element={<HotelList />} />
//           <Route path="/detail/:id" element={<DrinkDetail />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/admin" element={<Admin />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default;
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/routes/ProtectedRoute";
//import components
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Hotels from "./components/admin/Hotels";
import AddHotel from "./components/admin/AddHotel";
import EditHotel from "./components/admin/EditHotel";
import Dashboard from "./components/admin/Dashboard";
import Nav from "./components/layout/Nav";

import Establishment from "./components/establishment/Establishment";
import EstablishmentDetail from "./components/establishment/EstablishmentDetail";
import Contact from "./components/contact/Contact";

// import "./styles/index.css"
import Messages from "./components/admin/Messages";
import Enquiries from "./components/admin/Enquiries";

function App() {
  return (
    <div className="bg-gray-200">
      <AuthContextProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/hotels/:id" component={EstablishmentDetail} />
            <Route path="/hotels" exact component={Establishment} />
            <Route path="/contact" component={Contact} />
            <ProtectedRoute path="/admin" exact component={Dashboard} />
            <ProtectedRoute path="/admin/messages" exact component={Messages} />
            <ProtectedRoute
              path="/admin/enquiries"
              exact
              component={Enquiries}
            />
            <ProtectedRoute path="/admin/hotels" exact component={Hotels} />
            <ProtectedRoute
              path="/admin/hotels/add"
              exact
              component={AddHotel}
            />
            <ProtectedRoute
              path="/admin/hotels/edit/:id"
              exact
              component={EditHotel}
            />
            <Navigate to="/" />
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
