import React from "react";
import ReactModal from "react-modal";
import PostManagment from "../PostManagment/PostManagment";

const ModalWindow = ({ postId, isOpen, closeModal }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel='Modal'
      className='app-modal'
      overlayClassName='app-modal__overlay'
    >
      <div className='app-modal__content'>
        <button className='app-modal__close' onClick={closeModal}>
          Close
        </button>
        <PostManagment postId={postId} />
      </div>
    </ReactModal>
  );
};

export default ModalWindow;
