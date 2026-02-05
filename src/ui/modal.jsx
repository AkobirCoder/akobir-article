import { ArrowOutRightSquareHalf } from '@boxicons/react';
import React from 'react';
import {createPortal} from 'react-dom';

const Modal = ({btnName, onClose, logoutHandler}) => {
    return createPortal(
        <>
            <div className="modal-backdrop fade show"></div>
            <div className="modal fade show d-block" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Confirm logout</h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={onClose}
                            />
                        </div>
                        <div className="modal-body">
                            Are you sure you want to logout?
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
                                onClick={logoutHandler}
                            >
                                <ArrowOutRightSquareHalf />
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