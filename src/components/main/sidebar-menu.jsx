import React from 'react';
import { sidebarMenuItems } from '../../constants/index';
import { SidebarMenuItem } from '../index';

const SidebarMenu = () => {
    return (
        <div>
            <h2 className='h4 mb-3'>Catigories</h2>
            <div className='btn-group-vertical col-12'>
                {
                    sidebarMenuItems.map((item, index) => {
                        return (
                            <SidebarMenuItem  
                                key={item.title} 
                                title={item.title} 
                                index={index} 
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default SidebarMenu;