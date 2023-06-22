import React, { useEffect, useState } from "react";

const AlertData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users with due date of 17-06-2023 from an API or database
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8000/alert"); // Replace 'API_ENDPOINT' with your actual API endpoint or URL
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
          //console.log(data)
        } else {
          throw new Error("Failed to fetch users");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);

  const handleNotify = (user) => {
    // Perform your notification logic here
    sendWhatsAppMessage(phoneNumber, message)
    //console.log(`Notifying user: ${user.Name}`);
  };

  const phoneNumber = '6398021765'
  const message = 'Hi,Try the Function'
  function sendWhatsAppMessage(phoneNumber, message) {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url);
  }
    
  return (
    <>
      <h1>List of Users</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <strong>{index + 1}. </strong>
            <strong>Name:</strong> {user.Name}, <strong>Phone Number:</strong>{" "}
            {user.PhoneNumber}
            <button
              className="bg-blue-500 mb-2 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
              onClick={() => handleNotify(user)}
            >
              Notify Him
            </button>
            <br />
          </li>
        ))}
      </ul>
    </>
  );
};

export default AlertData;
