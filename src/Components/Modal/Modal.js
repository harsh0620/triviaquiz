import React from 'react'
import { useGlobalContext } from '../../context'
import "./Modal.css";

const Modal = () => {
  const { modal, closeModal, correct, questions,toggleModal } = useGlobalContext()

  return <div className={`${modal ? 'modal-container isOpen' : 'modal-container'}`}>
    <div className="modal-content">
     {toggleModal?<h2>Time's Up!</h2>: <h2>Completed!</h2>} 
      <p>You answered {correct} questions correctly out of {questions.length}</p>
      <button className="close-btn" onClick={closeModal}>Play again</button>
    </div>
     </div>
}

export default Modal
