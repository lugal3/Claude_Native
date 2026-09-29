import React from 'react';

export const Artistas = () => {
    return (
        <div className="page-container">
            <header className="page-header">
                <h1 className="title">Nuestros Artistas</h1>
                <p className="subtitle">Conoce a las mentes creativas detrás de nuestras colecciones.</p>
            </header>
            <main className="page-content artists-content">
                <div className="artist-card">
                    <div className="artist-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"}}></div>
                    <div className="artist-details">
                        <h2>Elena M. Rivera</h2>
                        <p className="artist-role">Pintora Abstracta</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    </div>
                </div>
                <div className="artist-card">
                    <div className="artist-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"}}></div>
                    <div className="artist-details">
                        <h2>David S. Klee</h2>
                        <p className="artist-role">Escultor Contemporáneo</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </main>
        </div>
    );
};
