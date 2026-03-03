import React from 'react';
import { AuthorImage } from '../assets/index';

const AboutUs = () => {
    return (
        <div className='row g-0 d-flex align-items-center justify-content-center' style={{minHeight: '100%'}}>
            <div className='col-12 col-md-8'>
                <div className='text-center'>
                    <img width={200} className='rounded-circle shadow-lg' src={AuthorImage} alt="Author" />
                    <h2 className='fw-semibold mb-4'>Akobir Usmonov</h2>
                    <p className='text-muted'>
                        "I am a passionate Junior Frontend Developer based in Uzbekistan 🇺🇿, dedicated to building responsive and accessible web applications. With a keen eye for design and a strong foundation in HTML, CSS, JavaScript, and React/Vue, I bridge the gap between graphical design and technical implementation. I thrive in collaborative environments and am constantly expanding my skill set to master modern frontend architectures. My goal is not just to write code, but to create seamless user experiences that solve real-world problems. Open to opportunities where I can contribute to impactful projects and grow alongside a talented team."
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;