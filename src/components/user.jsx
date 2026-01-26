import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../ui';
import { userDetailFailure, userDetailStart, userDetailSuccess } from '../slice/auth';
import AuthService from '../service/auth';
import { getItem } from '../helpers/persistance-storage';
import { useNavigate } from 'react-router-dom';

const User = () => {
    const dispatch = useDispatch();

    const {isLoading, user} = useSelector((state) => state.auth);

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
                                            className='col-12 bg-primary rounded-top border-bottom-0 p-5' 
                                            style={{backgroundImage: 'var(--bs-gradient)'}}
                                        >
                                            <h1 className='text-white fw-normal fs-4 fs-md-1'>Profile header background</h1>
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
                                                <div className='pt-2 pt-md-3 px-md-3'>
                                                    <h4 className='fs-3 fw-normal text-capitalize'>{user.username}</h4>
                                                    <ul className='list-group list-group-flush'>
                                                        <li className='list-group-item'>Email: {user.email}</li>
                                                        <li className='list-group-item'>Field:</li>
                                                        <li className='list-group-item'>Age:</li>
                                                        <li className='list-group-item'>Phone number:</li>
                                                        <li className='list-group-item'>Social link:</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-md-8 p-2 p-md-3'>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, atque autem illo voluptates ad, doloribus quas veritatis voluptatum non eaque maiores? Rem exercitationem rerum illo voluptatibus repudiandae dolorum architecto nostrum totam laborum necessitatibus, vel reiciendis. Distinctio, tempora repellat maiores fugit explicabo asperiores sequi nesciunt quia est quis libero vel error voluptas aliquam laboriosam cum totam magni, itaque quidem! Quis est tempora commodi, veritatis laboriosam consequatur tenetur totam nulla aliquam animi ab. Officiis ea a porro, illo nostrum quis veniam necessitatibus rerum repellat rem fugit soluta aut commodi quos quisquam facere blanditiis repudiandae est odio sint autem? Dolor odit aperiam, tempora fuga omnis sunt itaque eveniet enim cum deserunt esse quo blanditiis beatae ipsa alias facilis animi non laborum asperiores adipisci reprehenderit ex! Debitis a repellendus ea odio tempore veniam, minima ratione saepe esse molestiae sapiente vitae facere, quia corrupti libero itaque mollitia nostrum cum sequi velit doloremque obcaecati! Quidem dolorem quae, expedita perspiciatis ratione consequuntur? Incidunt fugit voluptates tenetur eligendi aliquid, repellat explicabo? Doloribus provident dolores unde perferendis minima ex impedit quis, rerum eligendi, nisi explicabo sapiente cumque veritatis perspiciatis asperiores dolor animi cupiditate minus quas corporis quibusdam dicta voluptate numquam. Atque illo maiores corrupti reprehenderit exercitationem? Suscipit nam maiores explicabo sequi modi, qui repudiandae laboriosam ad eveniet ab quam sed sunt nostrum et corporis cumque incidunt, tenetur quia porro odio praesentium magnam possimus! Libero rem molestiae labore commodi voluptate dicta qui rerum repellat aspernatur sunt, cupiditate facilis vero ratione incidunt necessitatibus voluptatem! Nemo consequuntur fugiat aliquid eos, quo laborum quam quas eum quia impedit odio minima iusto, ea error atque modi? Sed, cupiditate. Praesentium facilis asperiores magni accusamus, animi optio nihil mollitia obcaecati ex. Exercitationem dolorum quibusdam corporis hic natus tempora, vitae laboriosam veniam cum quaerat dicta pariatur, mollitia ducimus minus et omnis? Dolore ex nihil iure expedita itaque tempore, ducimus possimus enim reiciendis omnis voluptatem, temporibus repellendus sint beatae soluta quae, ut nisi?
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