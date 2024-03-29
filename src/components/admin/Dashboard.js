import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Dashboard() {
  return (
    <main className="dashboard-container">
      <h1 className="title">
        Welcome <span>username</span>
      </h1>
      <div className="category-container">
        <h2 className="subtitle">Dashboard</h2>
        <Link to="/hotels">
          <Button className="button">View establishments</Button>
        </Link>
        <Link to="/admin/establishment">
          <Button className="button">Create new establishment</Button>
        </Link>
        <Link to="/admin/enquiry">
          <Button className="button">See enquiries</Button>
        </Link>
        <Link to="/admin/contact">
          <Button className="button">Messages</Button>
        </Link>
      </div>
    </main>
  );
}

export default Dashboard;
