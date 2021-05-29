import React from 'react'
import "../Modal/Modal.css";
import { useGlobalContext } from '../../context'
function Error() {
    const { closeModal } = useGlobalContext()
    return (
        <div className="modal-content">
            <h1>Error Loading Content Try Refresh</h1>
            <button className="close-btn" onClick={closeModal}>Play again</button>
        </div>
    )
}

export default Error
