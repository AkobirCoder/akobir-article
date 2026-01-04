import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { AboutUs, Articles, Blogs, ContactUs, Login, Main, Navbar, Register, Sidebar } from './components';

const App = () => {
    return (
        <div>
            <div className='border-bottom bg-body-tertiary'>
                <Navbar />
            </div>
            <div className='row g-0'>
                {/* <div style={{height: '89.7vh'}} className='d-none d-md-block col-md-2 bg-dark-subtle'>
                    <Sidebar />
                </div> */}
                <div style={{height: '89.7vh'}} className='col-12 col-md-10'>
                    <Routes>
                        <Route path='/' element={<Main />} />
                        <Route path='/about-us' element={<AboutUs />} />
                        <Route path='/articles' element={<Articles />} />
                        <Route path='/blogs' element={<Blogs />} />
                        <Route path='/contact-us' element={<ContactUs />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;