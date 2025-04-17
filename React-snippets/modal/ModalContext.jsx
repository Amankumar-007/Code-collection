import React, { createContext, useState, useContext } from 'react';

// Create Context
const ModalContext = createContext();

// Custom hook to use the modal context
export const useModal = () => {
  return useContext(ModalContext);
};

// ModalProvider to wrap your app
export const ModalProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);

  const showModal = (content) => setModalContent(content);
  const hideModal = () => setModalContent(null);

  return (
    <ModalContext.Provider value={{ modalContent, showModal, hideModal }}>
      {children}
      {modalContent && <Modal {...modalContent} hideModal={hideModal} />}
    </ModalContext.Provider>
  );
};
