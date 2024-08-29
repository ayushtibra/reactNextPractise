import { useState } from "react";
import Modal from "../components/ModalComponent/Modal";

const CustomModalPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="App">
      <Modal
        isOpen={isModalOpen}
        toggleModal={toggleModal}
        isClickOutside={true}
      >
        <div className="content">Your content here!</div>
        {/* <button onClick={toggleModal}>Close</button> */}
      </Modal>

      <button onClick={toggleModal}>Open Modal</button>
    </div>
  );
};

export default CustomModalPage;
