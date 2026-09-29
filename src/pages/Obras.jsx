import React from 'react';

export const Obras = () => {
    return (
        <div className="page-container">
            <header className="page-header">
                <h1 className="title">Colección Completa</h1>
                <p className="subtitle">Explora todas las obras disponibles en nuestra galería.</p>
            </header>
            <main className="gallery">
                <div className="art-card">
                    <div className="art-placeholder" style={{backgroundImage: "url('https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    </div>
                    <div className="art-info">
                        <h3>Obra V - Trazos</h3>
                        <p>Acrílico sobre lienzo.</p>
                    </div>
                </div>
                <div className="art-card">
                    <div className="art-placeholder" style={{backgroundImage: "url('https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    </div>
                    <div className="art-info">
                        <h3>Obra VI - Renacer</h3>
                        <p>Óleo y espátula.</p>
                    </div>
                </div>
                <div className="art-card">
                    <div className="art-placeholder" style={{backgroundImage: "url('https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    </div>
                    <div className="art-info">
                        <h3>Obra VII - Perspectiva</h3>
                        <p>Arte digital moderno.</p>
                    </div>
                </div>
            </main>
        </div>
    );
};
