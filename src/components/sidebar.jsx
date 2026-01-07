import React from 'react';
import { sidebarItems } from '../constants';
import SidebarItem from './sidebar-item';

const Sidebar = () => {
    return (
        <div>
            <h2 className='h4 mb-3'>Sidebar</h2>
            <div className='btn-group-vertical col-12'>
                {
                    sidebarItems.map((item, index) => {
                        return (
                            <SidebarItem key={item.id} title={item.title} index={index} />
                        )
                    })
                }
            </div>
            <hr className='m-0' />
        </div>
    );
}

export default Sidebar;