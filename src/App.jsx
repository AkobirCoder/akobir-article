import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { AboutUs, Articles, Blogs, ContactUs, Login, Main, Navbar, Register } from './components';

const App = () => {
    return (
        <div>
            <div className='border-bottom bg-body-tertiary'>
                <Navbar />
            </div>
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
    );
}

export default App;