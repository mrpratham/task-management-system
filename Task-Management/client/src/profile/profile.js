import React, { useState, useEffect } from 'react';
import './profile.css'; // Import your CSS file

const api = 'http://localhost:3001'; // Your backend API endpoint

function Profile() {
  const [userData, setUserData] = useState({
    name: 'Prathamesh Potdar',
    email: 'pratham@email.com',
    designation: 'WebDev & MERN Developer'
  });

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    // Fetch user data from the backend API
    fetch(`${api}/user`)
      .then(res => res.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching user data:', error));
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="user-details">
        <div>
          <strong>Name:</strong> {userData.name}
        </div>
        <div>
          <strong>Email:</strong> {userData.email}
        </div>
        <div>
          <strong>Designation:</strong> {userData.designation}
        </div>
        
      </div>
    </div>
  );
}

export default Profile;
