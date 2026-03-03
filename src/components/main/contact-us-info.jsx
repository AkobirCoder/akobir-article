import React from 'react';

const ContactUsInfo = () => {
    return (
        <>
            <div className=''>
                <div className='d-flex align-items-start gap-3 mb-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"
                        fill="currentColor" viewBox="0 0 24 24" >
                        <path d="M16 10c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4m-6 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2"></path>
                        <path d="M11.42 21.81c.17.12.38.19.58.19s.41-.06.58-.19c.3-.22 7.45-5.37 7.42-11.82 0-4.41-3.59-8-8-8s-8 3.59-8 8c-.03 6.44 7.12 11.6 7.42 11.82M12 4c3.31 0 6 2.69 6 6 .02 4.44-4.39 8.43-6 9.74-1.61-1.31-6.02-5.29-6-9.74 0-3.31 2.69-6 6-6"></path>
                    </svg>
                    <div className='flex-column'>
                        <h4 className='fw-normal mb-3'>
                            Our address
                        </h4>
                        <p className='text-muted m-0'>
                            Tashkent, Yunusabad, Amir Temur district, 83A.
                        </p>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='d-flex align-items-start gap-3 mb-3'>
                    <svg  xmlns="http://www.w3.org/2000/svg" width="36" height="36"  
                        fill="currentColor" viewBox="0 0 24 24" >
                        <path d="M21.55 8.17 19 6.47V5.01c0-.55-.45-1-1-1h-2.7l-2.75-1.83c-.34-.22-.77-.22-1.11 0L8.69 4.01h-2.7c-.55 0-1 .45-1 1v1.46l-2.55 1.7c-.28.19-.45.5-.45.83v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-.33-.17-.65-.45-.83ZM7 6h10v4.46l-5 3.33-5-3.33zM4 20v-9.13l1.45.96 6 4c.17.11.36.17.55.17s.39-.06.55-.17l6-4 1.45-.96V20z"></path>
                    </svg>
                    <div className='flex-column'>
                        <h4 className='fw-normal mb-3'>
                            Email addresses
                        </h4>
                        <a 
                            className='d-block text-decoration-none text-muted mb-2' 
                            href="mailto:akobircoder2004@gmail.com" 
                            target='_blank' 
                            rel='noreferrer'
                        >
                            akobircoder2004@gmail.com
                        </a>
                        <a 
                            className='d-block text-decoration-none text-muted' 
                            href="mailto:akobir0308@gmail.com" 
                            target='_blank' 
                            rel='noreferrer'
                        >
                            akobir0308@gmail.com
                        </a>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='d-flex align-items-start gap-3 mb-3'>
                    <svg  xmlns="http://www.w3.org/2000/svg" width="36" height="36"  
                        fill="currentColor" viewBox="0 0 24 24" >
                        <path d="M18.07 22h.35c.47-.02.9-.26 1.17-.64l2.14-3.09c.23-.33.32-.74.24-1.14s-.31-.74-.64-.97l-4.64-3.09a1.47 1.47 0 0 0-.83-.25c-.41 0-.81.16-1.1.48l-1.47 1.59c-.69-.43-1.61-1.07-2.36-1.82-.72-.72-1.37-1.64-1.82-2.36l1.59-1.47c.54-.5.64-1.32.23-1.93L7.84 2.67c-.22-.33-.57-.57-.97-.64a1.46 1.46 0 0 0-1.13.24L2.65 4.41c-.39.27-.62.7-.64 1.17-.03.69-.16 6.9 4.68 11.74 4.35 4.35 9.81 4.69 11.38 4.69ZM6.88 10.05c-.16.15-.21.39-.11.59.05.09 1.15 2.24 2.74 3.84 1.6 1.6 3.75 2.7 3.84 2.75.2.1.44.06.59-.11l1.99-2.15 3.86 2.57-1.7 2.46c-1.16 0-6.13-.24-9.99-4.1S4 7.06 4 5.91l2.46-1.7 2.57 3.86-2.15 1.99Z"></path>
                    </svg>
                    <div className='flex-column'>
                        <h4 className='fw-normal mb-3'>
                            Contact numbers
                        </h4>
                        <a 
                            className='d-block text-decoration-none text-muted mb-2' 
                            href="tel:+998881117628" 
                            rel='noreferrer'
                        >
                            +998 88 111 76 28
                        </a>
                        <a 
                            className='d-block text-decoration-none text-muted' 
                            href="tel:+998901234567" 
                            rel='noreferrer'
                        >
                            +998 90 123 45 67
                        </a>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='d-flex align-items-start gap-3 mb-3'>
                    <svg  xmlns="http://www.w3.org/2000/svg" width="36" height="36"  
                        fill="currentColor" viewBox="0 0 24 24"  
                        transform="scale(1,-1) ">
                        <path d="M9.88 18.36a3 3 0 0 1-4.24 0 3 3 0 0 1 0-4.24l2.83-2.83-1.41-1.41-2.83 2.83a5.003 5.003 0 0 0 0 7.07c.98.97 2.25 1.46 3.54 1.46s2.56-.49 3.54-1.46l2.83-2.83-1.41-1.41-2.83 2.83Zm2.83-14.14L9.88 7.05l1.41 1.41 2.83-2.83a3 3 0 0 1 4.24 0 3 3 0 0 1 0 4.24l-2.83 2.83 1.41 1.41 2.83-2.83a5.003 5.003 0 0 0 0-7.07 5.003 5.003 0 0 0-7.07 0Z"></path>
                        <path d="m16.95 8.46-.71-.7-.7-.71-4.25 4.24-4.24 4.25.71.7.7.71 4.25-4.24z"></path>
                    </svg>
                    <div className='flex-column'>
                        <h4 className='fw-normal mb-3'>
                            Social networks
                        </h4>
                        <div className='d-flex align-items-center gap-5'>
                            <a
                                className='text-decoration-none contact-social'
                                href="https://t.me/c_s_p0308"
                                target='_blank'
                                rel='noreferrer'
                            >
                                <svg  xmlns="http://www.w3.org/2000/svg" width="60" height="60"  
                                    fill="#30A3D9" viewBox="0 0 24 24" >
                                    <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434"></path>
                                </svg>
                            </a>
                            <a
                                className='text-decoration-none contact-social'
                                href="https://linkedin.com/in/akobir-usmonov"
                                target='_blank'
                                rel='noreferrer'
                            >
                                <svg  xmlns="http://www.w3.org/2000/svg" width="60" height="60"  
                                    fill="#0A62BC" viewBox="0 0 24 24" >
                                    <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M8.339 18.337H5.667v-8.59h2.672zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096m11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
                                </svg>
                            </a>
                            <a
                                className='text-decoration-none contact-social'
                                href="https://instagram.com/coder.akobir"
                                target='_blank'
                                rel='noreferrer'
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
                                    <defs>
                                        <linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stop-color="#f09433"/>
                                            <stop offset="25%" stop-color="#e6683c"/>
                                            <stop offset="50%" stop-color="#dc2743"/>
                                            <stop offset="75%" stop-color="#cc2366"/>
                                            <stop offset="100%" stop-color="#bc1888"/>
                                        </linearGradient>
                                    </defs>
                                    <path fill="url(#instagramGradient)"
                                        d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248m0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008m4.807-8.875a1.078 1.078 0 1 0 0 2.156 1.078 1.078 0 1 0 0-2.156">
                                    </path>
                                    <path fill="url(#instagramGradient)"
                                        d="M20.533 6.111A4.6 4.6 0 0 0 17.9 3.479a6.6 6.6 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.6 6.6 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.6 6.6 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71s0 2.753.056 3.71c.015.748.156 1.486.419 2.187a4.6 4.6 0 0 0 2.634 2.632 6.6 6.6 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.6 6.6 0 0 0 2.186-.419 4.6 4.6 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.6 6.6 0 0 0-.421-2.217m-1.218 9.532a5 5 0 0 1-.311 1.688 3 3 0 0 1-1.712 1.711 5 5 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a5 5 0 0 1-1.669-.311 3 3 0 0 1-1.719-1.711 5.1 5.1 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654s0-2.686.053-3.655a5 5 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5 5 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a5 5 0 0 1 1.67.311 3 3 0 0 1 1.712 1.712 5.1 5.1 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655s0 2.698-.043 3.654z">
                                    </path>
                                </svg>
                            </a>
                            <a
                                className='text-decoration-none contact-social'
                                href="https://github.com/AkobirCoder"
                                target='_blank'
                                rel='noreferrer'
                            >
                                <svg  xmlns="http://www.w3.org/2000/svg" width="60" height="60"  
                                    fill="#000000" viewBox="0 0 24 24" >
                                    <path fill-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.6 9.6 0 0 1 2.496-.336 9.6 9.6 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2" clip-rule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactUsInfo;