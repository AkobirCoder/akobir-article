import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { Login, Main, Navbar, Register } from './components';

const App = () => {
    return (
        <div>
            <div className='border-bottom bg-body-tertiary'>
                <Navbar />
            </div>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </div>
    );
}

export default App;