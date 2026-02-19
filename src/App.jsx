import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { 
    AboutUs, 
    Appearance, 
    ArticleDetail, 
    Articles, 
    Blogs, 
    ContactUs, 
    CreateArticle, 
    EditArticle, 
    Login, 
    Main, 
    Navbar, 
    Profile, 
    Register,
    Sidebar,
    User,
    UserArticles,
    UserEdit,
    UserFollowers,
} from './components';
import AuthService from './service/auth';
import { signUserFailure, signUserSuccess } from './slice/auth';
import { getItem } from './helpers/persistance-storage';
import { clearProfileExtra, putProfileExtraSuccess } from './slice/profileExtra';

const App = () => {
    const [toggleSidebar, setTogglesidebar] = useState(false);

    const sidebarHandler = () => {
        setTogglesidebar((prevState) => {
            return !prevState;
        });
    }

    const dispatch = useDispatch();

    const {user} = useSelector((state) => state.auth);

    const getUser = async () => {
        try {
            const response = await AuthService.getUser();

            dispatch(signUserSuccess(response.user));
        } catch (error) {
            dispatch(signUserFailure(error.response.data.errors));
        }
    }

    useEffect(() => {
        const token = getItem('token');

        if (token) {
            getUser();
        }
    }, []);

    useEffect(() => {
        if (!user) return;

        const putedProfileExtraInfo = getItem(`profile_extra_info_${user.id}`);

        if (putedProfileExtraInfo) {
            dispatch(putProfileExtraSuccess(JSON.parse(putedProfileExtraInfo)));
        } else {
            dispatch(clearProfileExtra());
        }
    }, [user, dispatch]);

    return (
        <>
            <div className='position-fixed top-0 start-0 end-0 z-3 border-bottom bg-body-tertiary'>
                <Navbar />
            </div>
            <div className='row g-0'>
                <Sidebar 
                    user={user} 
                    toggleSidebar={toggleSidebar} 
                    sidebarHandler={sidebarHandler} 
                />
                <div 
                    style={{
                        height: 'calc(100vh - 74px)', 
                        marginTop: 74,
                        overflowY: 'auto',
                        transition: 'all 0.3s ease',
                    }} 
                    className={`
                        position-absolute end-0 z-1 p-3 
                        ${user ? 'col-12 col-md-10' : 'col-md-12'} 
                        ${toggleSidebar ? 'col-md-12 sidebar' : 'col-md-10'}
                        main-content
                    `}
                >
                    <Routes>
                        <Route path='/' element={<Main />} />
                        <Route path='/articles' element={<Articles />} />
                        <Route path='/view-article/:slug' element={<ArticleDetail />} />
                        <Route path='/create-article' element={<CreateArticle />} />
                        <Route path='/edit-article/:slug' element={<EditArticle />} />
                        <Route path='/about-us' element={<AboutUs />} />
                        <Route path='/blogs' element={<Blogs />} />
                        <Route path='/contact-us' element={<ContactUs />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/user' element={<User />} />
                        <Route path='/user-edit' element={<UserEdit />} />
                        <Route path='/user-articles' element={<UserArticles />} />
                        <Route path='/user-followers' element={<UserFollowers />} />
                        <Route path='/appearance' element={<Appearance />} />
                        <Route path='/profiles/:username' element={<Profile />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default App;