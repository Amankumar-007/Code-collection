import React from 'react';
import { ModalProvider, useModal } from './ModalContext';

function App() {
  return (
    <ModalProvider>
      <div>
        <h1>React Advanced Modal Example</h1>
        <ModalTrigger />
      </div>
    </ModalProvider>
  );
}

const ModalTrigger = () => {
  const { showModal } = useModal();

  const handleShowConfirmModal = () => {
    showModal({
      type: 'confirm',
      title: 'Are you sure?',
      message: 'Do you want to delete this item?',
      onConfirm: () => alert('Item deleted!'),
    });
  };

  const handleShowInfoModal = () => {
    showModal({
      type: 'info',
      title: 'Information',
      message: 'This is an info modal!',
    });
  };

  const handleShowFormModal = () => {
    showModal({
      type: 'form',
      title: 'Enter Info',
      message: 'Please enter some information below.',
    });
  };

  return (
    <div>
      <button onClick={handleShowConfirmModal}>Show Confirm Modal</button>
      <button onClick={handleShowInfoModal}>Show Info Modal</button>
      <button onClick={handleShowFormModal}>Show Form Modal</button>
    </div>
  );
};

export default App;
User.js
