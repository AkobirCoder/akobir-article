import React from 'react';
import { HomeImage } from './assets';

const Main = () => {
    return (
        <div className='row d-flex align-items-start m-md-3 py-md-3 ps-md-3 border rounded'>
            <div className='col-12 col-md-7 p-3'>
                <div className='p-3 p-md-4 shadow-lg rounded'>
                    <h1 className='display-4 fw-normal lh-1 text-body-secondary'>
                        Article
                    </h1>
                    <p className='lead'>
                        Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
                    </p>
                    <div className='d-flex flex-column flex-md-row gap-md-4 mt-md-5'>
                        <div className='p-0 mb-2 mb-md-0'>
                            <button className='btn btn-primary px-md-5 py-md-3 fs-4 w-100' type='button'>
                                Get start
                            </button>
                        </div>
                        <div className='p-0'>
                            <button className='btn btn-outline-secondary px-md-5 py-md-3 fs-4 w-100' type='button'>
                                See articles
                            </button>
                        </div>
                    </div>
                </div>
                <div className='mt-3 mt-md-5 p-3 p-md-4 shadow-lg rounded'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores magnam esse aspernatur laudantium eveniet corporis minus officiis, tempore fugiat odit nam rem non. Doloremque corrupti neque praesentium cupiditate, labore adipisci minima vel dolores nihil debitis deleniti commodi cumque culpa eos assumenda blanditiis, dolore impedit, soluta ad dignissimos suscipit repellat quod?
                </div>
            </div>
            <div className='d-none d-md-block col-12 col-md-4 offset-md-1 shadow-lg overflow-hidden p-0 mt-3'>
                <img style={{maxHeight: '70vh'}} className='rounded' src={HomeImage} alt="Home" />
            </div>
        </div>
    );
}

export default Main;