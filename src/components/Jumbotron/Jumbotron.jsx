import React, { useState } from "react";
import ModalWindow from "../ModalWindow/ModalWindow";

const Jumbotron = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className='app-jumbotron'>
      <ModalWindow isOpen={modalIsOpen} closeModal={closeModal} />

      <div className='app-jumbotron__inner-border'></div>
      <h2 className='app-jumbotron__title'>Workforce Survey</h2>
      <p className='app-jumbotron__text'>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi
      </p>
      <button className='app-jumbotron__btn' onClick={openModal}>
        Start Now
      </button>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Jumbotron;
