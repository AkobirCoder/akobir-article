import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Bell, BellSlash } from '@boxicons/react';
import { Loader } from '../../ui/index';
import { 
    getProfileFailure, 
    getProfileStart, 
    getProfileSuccess, 
    postFollowProfileFailure, 
    postFollowProfileStart,
    postFollowProfileSuccess
} from '../../slice/profile';
import ProfileService from '../../service/profile';

const Profile = () => {
    const {username} = useParams();

    const dispatch = useDispatch();

    const {user} = useSelector((state) => state.auth);

    const {profile, isLoading, followLoading} = useSelector((state) => state.profile);

    const navigate = useNavigate();

    useEffect(() => {
        const getProfile = async () => {
            dispatch(getProfileStart());

            try {
                const response = await ProfileService.getProfile(username);

                dispatch(getProfileSuccess(response.profile));
            } catch (error) {
                dispatch(getProfileFailure(error.response.data.errors));
            }
        }

        getProfile();
    }, [username, dispatch]);

    const followUnfollowProfile = async () => {
        dispatch(postFollowProfileStart());

        try {
            const response = profile.following 
            ? await ProfileService.unfollowProfile(username)
            : await ProfileService.followProfile(username);

            dispatch(postFollowProfileSuccess(response.profile));
        } catch (error) {
            dispatch(postFollowProfileFailure(error.response.data.errors));
        }
    }

    const navigateUserArticles = () => {
        navigate(`/articles?author=${username}`);
    }

    return (
        <>
            {(
                () => {
                    if (isLoading || !profile) {
                        return (
                            <div className='d-flex align-items-center justify-content-center h-100'>
                                <Loader />
                            </div>
                        );
                    } else {
                        return (
                            <div className='row g-0'>
                                <div className='col-12'>
                                    <div className='row g-0 bg-light border rounded'>
                                        <div className='col-12 col-md-4 d-flex justify-content-center pt-4 ps-4 pe-4 pb-2 p-md-4'>
                                            <div className='row g-0 d-flex justify-content-center'>
                                                <div className='col-12 d-flex justify-content-center mb-3 mb-md-4'>
                                                    {(
                                                        () => {
                                                            if (profile.image) {
                                                                return (
                                                                    <img src={profile.image} alt="User" />
                                                                );
                                                            } else {
                                                                return (
                                                                    <svg
                                                                        className='bg-placeholder-img'
                                                                        width={'200'}
                                                                        height={'200'}
                                                                        xmlns='http://www.w3.org/2000/svg'
                                                                        role='img'
                                                                        aria-label='Placeholder: Thumbnail'
                                                                        preserveAspectRatio='xMidYMid slice'
                                                                        focusable='false'
                                                                        style={{borderRadius: '50%'}}
                                                                    >
                                                                        <title>Placeholder</title>
                                                                        <rect width={'100%'} height={'100%'} fill='#55595C'></rect>
                                                                        <text
                                                                            x={'50%'} y={'50%'}
                                                                            fill='#fff'
                                                                            className='fs-2 text-uppercase p-0 m-0'
                                                                            textAnchor="middle" dominantBaseline="middle"
                                                                        >
                                                                            {profile.username[0]}
                                                                        </text>
                                                                    </svg>
                                                                );
                                                            }
                                                        }
                                                    )()}
                                                </div>
                                                <div className='row d-flex justify-content-center'>
                                                    {
                                                        user?.username === profile.username
                                                        ? ''
                                                        : (
                                                            <div className='col-6'>
                                                                <button 
                                                                    style={{backgroundImage: 'var(--bs-gradient)'}}
                                                                    className='btn btn-primary w-100 h-100'
                                                                    disabled={followLoading}
                                                                    onClick={followUnfollowProfile}
                                                                >
                                                                    {
                                                                        followLoading
                                                                        ? (
                                                                            profile.following ? 'Unfollowing...' : 'Following...'
                                                                        )
                                                                        : (
                                                                            <>
                                                                                {
                                                                                    profile.following 
                                                                                    ? (
                                                                                        <>
                                                                                            <span className='me-2'>
                                                                                                Unfollow
                                                                                            </span>
                                                                                            <BellSlash />
                                                                                        </>
                                                                                    )
                                                                                    : (
                                                                                        <>
                                                                                            <span className='me-2'>
                                                                                                Follow
                                                                                            </span>
                                                                                            <Bell />
                                                                                        </>
                                                                                    )
                                                                                }
                                                                            </>
                                                                        )
                                                                    }
                                                                </button>
                                                            </div>
                                                        )
                                                    }
                                                    <div className='col-6'>
                                                        <button 
                                                            style={{backgroundImage: 'var(--bs-gradient)'}}
                                                            className='btn btn-primary w-100 h-100'
                                                            onClick={navigateUserArticles}
                                                        >
                                                            Go to articles
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-md-8 p-3 p-md-4'>
                                            <div className='row g-0 bg-body border rounded p-2 p-md-3 h-100 shadow-lg'>
                                                <div className='col-12 col-md-6 p-2 p-md-3'>
                                                    {
                                                        profile ? (profile.username) : 'No data'
                                                    }
                                                </div>
                                                <div className='col-12 col-md-6 p-2 p-md-3'>
                                                    sa
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 mt-3'>
                                    <div className='row g-0 bg-light border rounded'>
                                        <div className='p-3 p-md-4'>
                                            <p className='m-0 p-3 text-muted bg-body rounded shadow-lg' style={{textAlign: 'justify'}}>
                                                {
                                                    profile.bio ? (profile.bio) : 'No data'
                                                }
                                                
                                            </p>
                                        </div>
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

export default Profile;