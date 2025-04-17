import React from 'react';
import './Modal.css';  // Custom styles for modal

// Modal component
const Modal = ({ type, title, message, onConfirm, hideModal }) => {
  const handleClose = () => hideModal();

  const handleConfirm = () => {
    if (onConfirm) onConfirm();
    hideModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>{title}</h2>
        <p>{message}</p>

        {/* Conditional rendering based on modal type */}
        {type === 'confirm' && (
          <div>
            <button onClick={handleConfirm}>Yes</button>
            <button onClick={handleClose}>No</button>
          </div>
        )}

        {type === 'info' && (
          <div>
            <button onClick={handleClose}>Close</button>
          </div>
        )}

        {type === 'form' && (
          <div>
            <input type="text" placeholder="Enter something..." />
            <button onClick={handleConfirm}>Submit</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
