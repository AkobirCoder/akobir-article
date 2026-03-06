import React, { useEffect, useState } from 'react';
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
    const [alert, setAlert] = useState(null);

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

            if (response.profile.following) {
                setAlert(`You are following ${response.profile.username}`);
            } else {
                setAlert(`You unfollowed ${response.profile.username}`);
            }
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
                                    {alert && (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
                                                <symbol id="check-circle-fill" viewBox="0 0 16 16">
                                                    <path 
                                                        fill="currentColor"
                                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                                                    />
                                                </symbol>
                                                <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
                                                    <path 
                                                        fill="currentColor"
                                                        d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                                                    />
                                                </symbol>
                                            </svg>
                                            <div 
                                                className={`
                                                    alert ${profile.following 
                                                        ? 'alert-success' 
                                                        : 'alert-warning'
                                                    } 
                                                    alert-dismissible fade show
                                                `}
                                            >
                                                {
                                                    profile.following ? (
                                                        <svg className="bi flex-shrink-0 me-2 text-success" width="20" height="20">
                                                            <use href="#check-circle-fill" />
                                                        </svg>
                                                    ) : (
                                                        <svg className="bi flex-shrink-0 me-2 text-warning" width="20" height="20">
                                                            <use href="#exclamation-triangle-fill" />
                                                        </svg>
                                                    )
                                                }
                                                {alert}
                                                <button
                                                    type='button'
                                                    className='btn-close'
                                                    aria-label='Close'
                                                    onClick={() => setAlert(null)}
                                                ></button>
                                            </div>
                                        </>
                                    )}
                                    <div className='row g-0 bg-body-tertiary border rounded'>
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
                                                    <h4 className='fw-semibold'>
                                                        {
                                                            profile ? (profile.username) : 'No data'
                                                        }
                                                    </h4>
                                                    <p style={{textAlign: 'justify'}} className='m-0'>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, mollitia qui? Quidem ut aliquid recusandae inventore voluptate nemo aspernatur enim consequuntur animi doloribus aperiam voluptatem odit quae exercitationem dolor quia, quibusdam quisquam officia nam reiciendis eum placeat quod. Corrupti, velit?
                                                    </p>
                                                </div>
                                                <div className='col-12 col-md-6 p-2 p-md-3'>
                                                    <p style={{textAlign: 'justify'}} className='m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quisquam cumque eius voluptatibus vitae sunt dolores odit quaerat, pariatur saepe impedit mollitia qui porro quis, aliquam esse nemo recusandae sequi illum aspernatur animi iure consequuntur obcaecati. Quaerat expedita facilis culpa deserunt aliquid ipsum saepe, tempora sint, vel veniam corrupti. Nesciunt.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 mt-3'>
                                    <div className='row g-0 bg-body-tertiary border rounded'>
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