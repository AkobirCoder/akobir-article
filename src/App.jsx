import React, { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import { AboutUs, Articles, Blogs, ContactUs, Login, Main, Navbar, Register, Sidebar } from './components';
import AuthService from './service/auth';
import { useDispatch } from 'react-redux';
import { signUserFailure, signUserSuccess } from './slice/auth';
import { getItem } from './helpers/persistance-storage';
import ArticleService from './service/article';
import { getArticlesStart, getArticleSuccess } from './slice/article';
import ArticleDetail from './components/article-detail';

const App = () => {
    const [toggleSidebar, setTogglesidebar] = useState(false);

    const sidebarHandler = () => {
        setTogglesidebar((prevState) => {
            return !prevState;
        });
    }

    const dispatch = useDispatch();

    const getUser = async () => {
        try {
            const response = await AuthService.getUser();

            dispatch(signUserSuccess(response.user));
        } catch (error) {
            dispatch(signUserFailure(error.response.data.errors));
        }
    }

    const getArticles = async () => {
        dispatch(getArticlesStart());

        try {
            const response = await ArticleService.getArticles();

            dispatch(getArticleSuccess(response.articles));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const token = getItem('token');

        if (token) {
            getUser();
        }

        getArticles();
    }, []);

    return (
        <>
            <div className='position-fixed top-0 start-0 end-0 z-3 border-bottom bg-body-tertiary'>
                <Navbar />
            </div>
            <div className='row g-0'>
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
                            <Sidebar />
                        </div>
                        <div className={`d-flex ${toggleSidebar ? 'justify-content-end col-3' : 'justify-content-center col-2'}`}>
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
                <div 
                    style={{
                        height: 'calc(100vh - 74px)', 
                        marginTop: 74,
                        transition: 'all 0.3s ease',
                    }} 
                    className={`position-absolute end-0 p-3 col-12 col-md-10 z-1 ${toggleSidebar ? 'col-md-12 sidebar' : 'col-md-10'}`}
                >
                    <Routes>
                        <Route path='/' element={<Main />} />
                        <Route path='/articles' element={<Articles />} />
                        <Route path='/article/:slug' element={<ArticleDetail />} />
                        <Route path='/about-us' element={<AboutUs />} />
                        <Route path='/blogs' element={<Blogs />} />
                        <Route path='/contact-us' element={<ContactUs />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default App;