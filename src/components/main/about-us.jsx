import React from 'react';
import { AuthorImage } from '../assets/index';

const AboutUs = () => {
    const socialLinks = [
        {
            id: 'telegram',
            url: 'https://t.me/c_s_p0308',
            label: 'Telegram',
            icon: (
                <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#30A3D9" viewBox="0 0 24 24" >
                    <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434"></path>
                </svg>
            ),
        },
        {
            id: 'instagram',
            url: 'https://instagram.com/coder.akobir',
            label: 'Instagram',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
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
            ),
        },
        {
            id: 'linkedin',
            url: 'https://linkedin.com/in/akobir-usmonov',
            label: 'Linkedin',
            icon: (
                <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#0A62BC" viewBox="0 0 24 24" >
                    <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M8.339 18.337H5.667v-8.59h2.672zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096m11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
                </svg>
            ),
        },
        {
            id: 'github',
            url: 'https://github.com/AkobirCoder',
            label: 'GitHub',
            icon: (
                <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000000" viewBox="0 0 24 24" >
                    <path fillRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.6 9.6 0 0 1 2.496-.336 9.6 9.6 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2" clipRule="evenodd"></path>
                </svg>
            ),
        },
    ];
    
    return (
        <div className='row g-0 d-flex align-items-center justify-content-center' style={{minHeight: '100%'}}>
            <div className='col-12 col-md-10'>
                <div className='text-center mb-4'>
                    <img width={200} className='rounded-circle shadow-lg' src={AuthorImage} alt="Author" />
                    <h2 className='fw-semibold mb-4'>Akobir Usmonov</h2>
                    <p className='text-muted'>
                        "I am a passionate Junior Frontend Developer based in Uzbekistan 🇺🇿, dedicated to building responsive and accessible web applications. With a keen eye for design and a strong foundation in HTML, CSS, JavaScript, and React/Vue, I bridge the gap between graphical design and technical implementation. I thrive in collaborative environments and am constantly expanding my skill set to master modern frontend architectures. My goal is not just to write code, but to create seamless user experiences that solve real-world problems. Open to opportunities where I can contribute to impactful projects and grow alongside a talented team."
                    </p>
                </div>
                <div className='row g-md-5'>
                    <div className='col-12 col-md-8'>
                        <h2 className='text-center fw-semibold mb-2'>
                            Experience
                        </h2>
                        <p style={{textAlign: 'justify'}} className='text-muted'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi quo, numquam explicabo repellendus, cum hic, delectus dicta corporis consequatur ipsum accusamus provident! Ducimus error deserunt obcaecati natus, expedita sed reprehenderit illo minima a modi unde molestias corrupti aliquam dignissimos itaque vitae ipsum incidunt sit, aut iusto quod nisi? Doloribus, optio?
                        </p>
                    </div>
                    <div className='col-12 col-md-4'>
                        <h2 className='text-center fw-semibold mb-2'>
                            Contact with me
                        </h2>
                        <div className='d-flex flex-column align-items-center'>
                            <div className=''>
                                {
                                    socialLinks.map((socilLink) => {
                                        return (
                                            <div key={socilLink.id} className='d-flex gap-2'>
                                                {socilLink.icon}
                                                <a 
                                                    className='text-decoration-none text-muted' 
                                                    href={socilLink.url} 
                                                    target='_blank' 
                                                    rel='noreferrer'
                                                >
                                                    {socilLink.label}
                                                </a>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;