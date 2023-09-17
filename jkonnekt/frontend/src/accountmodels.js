import React from 'react';

const AccountModal = ({ isOpen, onClose, accountInfo }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <h2>Account Information</h2>
        <p>Pay into the account below and send the recipt to the email below to book for this item</p>
        <p> Accont name :JKONNECT</p>
        <p>Email: davesides005@gmail.com</p>
        <p>Bank: Premium standard bank</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AccountModal;
