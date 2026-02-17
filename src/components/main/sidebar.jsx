import React from 'react';
import { SidebarMenu } from '../index'

const Sidebar = ({user, toggleSidebar, sidebarHandler}) => {
    return (
        <>
            {(
                () => {
                    if (!user) {
                        return '';
                    } else {
                        return (
                            <div 
                                style={{
                                    height: 'calc(100vh - 74px)', 
                                    marginTop: 74,
                                    transform: toggleSidebar 
                                    ? 'translateX(calc(-100% + 68px))' 
                                    : 'translateX(0)', 
                                    transition: 'transform 0.3s ease'
                                }} 
                                className='position-fixed top-0 bottom-0 z-3 d-none d-md-block p-3 col-md-2 bg-light border-end'
                            >
                                <div className='row g-0 d-flex align-items-start'>
                                    <div className={`${toggleSidebar ? 'col-9' : 'col-10'}`}>
                                        <SidebarMenu />
                                    </div>
                                    <div className={`
                                        d-flex 
                                        ${toggleSidebar ? 'justify-content-end col-3' : 'justify-content-center col-2'}
                                    `}>
                                        <button
                                            type='button'
                                            className='btn bg-primary-subtle px-2 py-0 fs-5 border-primary text-primary pointer'
                                            onClick={sidebarHandler}
                                        >
                                            {
                                                toggleSidebar
                                                    ? <i className="bi bi-arrow-bar-right"></i>
                                                    : <i className="bi bi-arrow-bar-left"></i>
                                            }
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                }
            )()}
        </>
    );
}

export default Sidebar;