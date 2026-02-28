import React, { useEffect, useState } from 'react';

const Appearance = () => {
    const [currentTheme, setCurrentTheme] = useState('auto');

    // theme ni qo'llash
    const applyTheme = (theme) => {
        localStorage.setItem('theme', theme);

        setCurrentTheme(theme);

        const root = document.documentElement;

        if (theme === 'auto') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            root.setAttribute('data-bs-theme', prefersDark ? 'dark' : 'light');
        } else {
            root.setAttribute('data-bs-theme', theme);
        }
    };

    // boshlang'ich yuklash
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'auto';

        applyTheme(savedTheme);

        const media = window.matchMedia('(prefers-color-scheme: dark)');

        const handler = () => {
            if ((localStorage.getItem('theme') || 'auto') === 'auto') {
                applyTheme('auto');
            }
        };

        media.addEventListener('change', handler);

        return () => {
            media.removeEventListener('change', handler);
        };
    }, []);

    return (
        <div>
            {/* SVG symbols */}
            <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
                <symbol id="sun-fill" viewBox="0 0 16 16">
                    <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                </symbol>

                <symbol id="moon-stars-fill" viewBox="0 0 16 16">
                    <path d="M6 .278a.768.768 0 0 1 .08.858..." />
                </symbol>

                <symbol id="circle-half" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 0 8 1v14z" />
                </symbol>
            </svg>
            
            {/* Toggle */}
            <div className="dropdown me-2">
                <button
                    className="btn btn-primary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    {currentTheme === 'light' && '☀️ Light'}
                    {currentTheme === 'dark' && '🌙 Dark'}
                    {currentTheme === 'auto' && '🌓 Auto'}
                </button>

                <ul className="dropdown-menu dropdown-menu-end shadow">
                    <li>
                        <button
                            className="dropdown-item"
                            onClick={() => applyTheme('light')}
                        >
                            ☀️ Light
                        </button>
                    </li>

                    <li>
                        <button
                            className="dropdown-item"
                            onClick={() => applyTheme('dark')}
                        >
                            🌙 Dark
                        </button>
                    </li>

                    <li>
                        <button
                            className="dropdown-item"
                            onClick={() => applyTheme('auto')}
                        >
                            🌓 Auto
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Appearance;