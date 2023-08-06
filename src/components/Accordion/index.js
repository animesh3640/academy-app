import React, { useState } from 'react';
import './styles.css';

const Accordion = ({ userData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className={`accordion ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
      <div className="accordion-header">
        <span>{userData.name}</span>
        <span>{userData.applicationStatus.toUpperCase()}</span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <div> {userData.profilePic && <img src={userData.profilePic} alt="Profile" />}</div>
          <div>
            <p>Email: {userData.email}</p>
            <p>Number: {userData.number}</p>
            <p>ID: {userData.id}</p>
            <p>Selected Course: {userData.selectedCourse.join(', ')}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
