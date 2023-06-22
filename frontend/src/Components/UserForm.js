import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertData from "./AlertData";


const UserForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [fee, setFee] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create a data object with the form values
      const data = {
        name,
        phoneNumber,
        joiningDate,
        fee,
        paymentMethod,
      };

      // Make a POST request to the backend API endpoint
      const response = await fetch("http://localhost:8000/insert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Reset the form values
        setName("");
        setPhoneNumber("");
        setJoiningDate("");
        setFee("");
        setPaymentMethod("");

        // Show success message or perform any other necessary actions
        console.log("Data inserted successfully");
        //console.log(data)
        navigate("/success", { state: { data } });
      } else {
        throw new Error("Failed to insert data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const data = {
  //     name,
  //     phoneNumber,
  //     joiningDate,
  //     fee,
  //     paymentMethod,
  //   };
  //   if(!data){
  //     navigate('/success', { state: { data } });
  //   }
  //   else{
  //     alert("Please enter the data !!")
  //   }
  // };

  return (
    <>
      <div className="flex ml-10">
        <div className="w-1/2">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label> <br />
              <input
                type="text"
                id="name"
                style={{ border: "1px solid black" }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="phoneNumber">Phone Number:</label> <br />
              <input
                type="text"
                id="phoneNumber"
                value={phoneNumber}
                style={{ border: "1px solid black" }}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="joiningDate">Date of Joining:</label> <br />
              <input
                type="date"
                id="joiningDate"
                value={joiningDate}
                style={{ border: "1px solid black" }}
                onChange={(e) => setJoiningDate(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="fee">Fee:</label> <br />
              <input
                type="text"
                id="fee"
                value={fee}
                style={{ border: "1px solid black" }}
                onChange={(e) => setFee(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="paymentMethod">Payment Method:</label> <br />
              <select
                id="paymentMethod"
                value={paymentMethod}
                style={{ border: "1px solid black" }}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="">-- Select Payment Method --</option>
                <option value="Cash">Cash</option>
                <option value="Paytm">Paytm</option>
                <option value="PhonePe">PhonePe</option>
                <option value="GooglePay">Google Pay</option>
              </select>
            </div>
            <br />
            <button type="submit" style={{ border: "1px solid black" }}>
              Submit
            </button>
          </form>
        </div>
        <div className="w-1/2">
          <AlertData />
        </div>
      </div>
    </>
  );
};

export default UserForm;
