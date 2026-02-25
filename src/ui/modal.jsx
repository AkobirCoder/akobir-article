import React from 'react';
import { createPortal } from 'react-dom';

const Modal = ({title, description, btnName, btnIcon, onClose, onConfirm}) => {
    const modalClickHandler = () => {
        onClose();

        onConfirm();
    }
    
    return createPortal(
        <>
            <div 
                style={{zIndex: 2000}}
                className="modal-backdrop fade show"
            ></div>
            <div 
                style={{zIndex: 2005}}
                className="modal fade show d-block" 
                tabIndex="-1"
            >
                <div className={`modal-dialog modal-dialog-centered`}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{title}</h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={onClose}
                            />
                        </div>
                        <div className="modal-body">
                            {description}
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={onClose}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-danger px-3"
                                onClick={modalClickHandler}
                            >
                                {btnIcon}
                                <span className='ms-2'>{btnName}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.body
    );
}

export default Modal;