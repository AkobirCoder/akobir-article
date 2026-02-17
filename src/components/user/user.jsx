import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { 
    BirthdayCake,
    Buildings, 
    Captions, 
    Education, 
    Github, 
    Instagram, 
    Linkedin, 
    Location, 
    Phone, 
    Telegram, 
    WorkflowAlt 
} from '@boxicons/react';
import { Loader, userFormInputSocialsProps } from '../../ui/index';
import { userDetailFailure, userDetailStart, userDetailSuccess } from '../../slice/auth';
import AuthService from '../../service/auth';
import { getItem } from '../../helpers/persistance-storage';
import { userPrivateInfoItems, userShortInfoItems } from '../../constants/index';

const User = () => {
    const dispatch = useDispatch();

    const {user} = useSelector((state) => state.auth);

    const { profileExtra } = useSelector(state => state.profileExtra);

    const navigate = useNavigate();

    useEffect(() => {
        const token = getItem('token');

        if (!token) {
            navigate('/login');
        }

        const getUserProfile = async () => {
            dispatch(userDetailStart());

            try {
                const response = await AuthService.getUser();

                dispatch(userDetailSuccess(response.user));
            } catch (error) {
                dispatch(userDetailFailure(error.response.data.errors));
            }
        }

        getUserProfile();
    }, [dispatch, navigate]);

    const navigateHandler = () => {
        navigate('/user-edit');
    }

    const iconsMap = {
        Field: WorkflowAlt,
        Organization: Buildings,
        Study: Education,
        Location: Location,
        Telegram: Telegram,
        Instagram: Instagram,
        Linkedin: Linkedin,
        Github: Github,
        Phone: Phone,
        BirthdayCake: BirthdayCake,
        Caption: Captions,
    }

    return (
        <>
            {(
                () => {
                    if (!user) {
                        return (
                            <div className='d-flex align-items-center justify-content-center h-100'>
                                <Loader />
                            </div>
                        );
                    } else {
                        return (
                            <div className='row d-flex' style={{minHeight: '100%'}}>
                                <div className='col-12'>
                                    <div className='row g-0 bg-light-subtle rounded border border-light-subtle'>
                                        <div 
                                            className='col-12 d-flex d-md-block justify-content-center bg-primary rounded-top border-bottom-0 p-4 p-md-5' 
                                            style={{backgroundImage: 'var(--bs-gradient)'}}
                                        >
                                            <h1 className='text-white fw-normal fs-4 fs-md-1'>
                                                Profile header background
                                            </h1>
                                        </div>
                                        <div className='col-12 col-md-4 p-2 p-md-3 border-end'>
                                            <div className='d-flex flex-column pt-3 pt-md-5'>
                                                <div className='d-flex align-items-center justify-content-center'>
                                                    {(
                                                        () => {
                                                            if (user.image) {
                                                                return (
                                                                    <img src={user.image} alt="User" />
                                                                );
                                                            } else {
                                                                return (
                                                                    <svg
                                                                        className='bg-placeholder-img'
                                                                        width={'150'}
                                                                        height={'150'}
                                                                        xmlns='http://www.w3.org/2000/svg'
                                                                        role='img'
                                                                        aria-label='Placeholder: Thumbnail'
                                                                        preserveAspectRatio='xMidYMid slice'
                                                                        focusable='false'
                                                                        style={{borderRadius: '50%'}}
                                                                    >
                                                                        <title>Placeholder</title>
                                                                        <rect width={'100%'} height={'100%'} fill='#0091ff'></rect>
                                                                        <text 
                                                                            x={'50%'} y={'50%'} 
                                                                            fill='#fff' 
                                                                            className='fs-2 text-uppercase p-0 m-0'
                                                                            textAnchor="middle" dominantBaseline="middle"
                                                                        >
                                                                            {user.username[0]}
                                                                        </text>
                                                                    </svg>
                                                                );
                                                            }
                                                        }
                                                    )()}
                                                </div>
                                                {(profileExtra && user) && (
                                                    <div className='pt-2 pt-md-3 px-md-3'>
                                                        <h4 className='fs-3 fw-semibold m-0'>{profileExtra.fullname}</h4>
                                                        <div className='d-flex text-muted fw-normal'>
                                                            <p className='fs-4 m-0'>{user.username}</p>
                                                            <p style={{width: 20, height: 20}} className='d-flex align-items-center justify-content-center fs-4 mx-1 my-0'>.</p>
                                                            <p className='fs-4 m-0'>{profileExtra.pronoun}</p>
                                                        </div>
                                                        <p className='my-2'>{profileExtra.description}</p>
                                                        <button type='button' className='btn btn-secondary w-100 my-3' onClick={navigateHandler}>
                                                            Edit profile
                                                        </button>
                                                        <hr className='m-0' />
                                                        <div className='mt-2'>
                                                            <ul className='list-unstyled'>
                                                                {
                                                                    userShortInfoItems.map((userShortInfoItem, index) => {
                                                                        const Icon = iconsMap[userShortInfoItem.icon];

                                                                        return (
                                                                            <li 
                                                                                key={userShortInfoItem.name}
                                                                                style={{fontSize: 15}}
                                                                                className={`
                                                                                    d-flex align-items-start
                                                                                    ${index === userShortInfoItems.length - 1 ? 'mb-0' : 'mb-2'}
                                                                                `}
                                                                            >
                                                                                <div className='me-1'>
                                                                                    <Icon />
                                                                                </div>
                                                                                <span className='ms-2'>{profileExtra?.[userShortInfoItem.content]}</span>
                                                                            </li>
                                                                        );
                                                                    })
                                                                }
                                                            </ul>
                                                        </div>
                                                        <hr className='m-0' />
                                                        <div className='mt-2'>
                                                            <ul className='list-unstyled'>
                                                                {
                                                                    userFormInputSocialsProps.map((socialLink) => {
                                                                        const Icon = iconsMap[socialLink.icon];

                                                                        return (
                                                                            <li key={socialLink.id} className={`d-flex align-items-center mb-2`}>
                                                                                <div className='me-1'>
                                                                                    <Icon />
                                                                                </div>
                                                                                <Link 
                                                                                    to={profileExtra.socials?.[socialLink.name]} 
                                                                                    style={{fontSize: 14.5}}
                                                                                    className='ms-2 text-decoration-none text-muted'
                                                                                >
                                                                                    {profileExtra.socials?.[socialLink.name]}
                                                                                </Link>
                                                                            </li>
                                                                        );
                                                                    })
                                                                }
                                                            </ul>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className='col-12 col-md-8 p-2 p-md-3'>
                                            <div className='d-flex flex-column p-3 mb-3 bg-light rounded border'>
                                                {
                                                    userPrivateInfoItems.map((privateInfo) => {
                                                        const Icon = iconsMap[privateInfo.icon];

                                                        return (
                                                            <div 
                                                                key={privateInfo.id}
                                                                className='d-flex align-items-start text-muted'
                                                            >
                                                                <div className='me-2'>
                                                                    <Icon />
                                                                </div>
                                                                <p className='ms-1'>{profileExtra?.[privateInfo.content]}</p>
                                                            </div>
                                                        );
                                                    })
                                                }
                                                <div className='d-flex align-items-start text-muted'>
                                                    <div className='me-2'>
                                                        <Captions />
                                                    </div>
                                                    <p className='ms-1 mb-0'>{user?.bio}</p>
                                                </div>
                                            </div>
                                            <div className='row g-3'>
                                                <div className='col-12 col-md-6'>
                                                    <div className='bg-light border rounded p-3'>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus earum dignissimos inventore tenetur a libero quo illo voluptate officia assumenda incidunt dolores repellendus blanditiis explicabo ut numquam voluptatibus, corrupti odit?
                                                    </div>
                                                </div>
                                                <div className='col-12 col-md-6'>
                                                    <div className='bg-light border rounded p-3'>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus earum dignissimos inventore tenetur a libero quo illo voluptate officia assumenda incidunt dolores repellendus blanditiis explicabo ut numquam voluptatibus, corrupti odit?
                                                    </div>
                                                </div>
                                            </div>
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

export default User;