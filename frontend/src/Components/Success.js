import React from "react";
import { useLocation, Link } from "react-router-dom";

const Success = ({ history }) => {
  const location = useLocation();
  const { data } = location.state || {};

  // Redirect to the form if data is not available
  if (!data) {
    history.push("/");
    return null;
  }

  return (
    <div>
      <p>Your form has been submitted successfully.</p>
      {data ? (
        <div>
          <h3>Submitted Data:</h3>
          <p>
            <strong>Name:</strong> {data.name}
          </p>
          <p>
            <strong>Phone Number:</strong> {data.phoneNumber}
          </p>
          <p>
            <strong>Date of Joining:</strong> {data.joiningDate}
          </p>
          <p>
            <strong>Fee:</strong> {data.fee}
          </p>
          <p>
            <strong>Payment Method:</strong> {data.paymentMethod}
          </p>
        </div>
      ) : (
        <p>No form data found.</p>
      )}
      <Link to="/" style={{ border: "1px solid black" }}>
        Add Another User
      </Link>
    </div>
  );
};

export default Success;
