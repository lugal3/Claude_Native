import React from 'react';

export const Contacto = () => {
    return (
        <div className="page-container">
            <header className="page-header">
                <h1 className="title">Contáctanos</h1>
                <p className="subtitle">Estamos aquí para escucharte y ayudarte a encontrar la obra perfecta.</p>
            </header>
            <main className="page-content contact-content">
                <div className="contact-info">
                    <h2>Información de Contacto</h2>
                    <p><strong>Email:</strong> info@amirgo.art</p>
                    <p><strong>Teléfono:</strong> +1 234 567 890</p>
                    <p><strong>Dirección:</strong> 123 Art Avenue, Ciudad Creativa</p>
                    <div className="placeholder-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1499892477393-f67587eba700?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"}}></div>
                </div>
                <div className="contact-form">
                    <h2>Envíanos un Mensaje</h2>
                    <form className="form-layout">
                        <input type="text" placeholder="Tu Nombre" className="form-input" />
                        <input type="email" placeholder="Tu Email" className="form-input" />
                        <textarea placeholder="Tu Mensaje" rows="5" className="form-input"></textarea>
                        <button type="button" className="action-button">Enviar Mensaje</button>
                    </form>
                </div>
            </main>
        </div>
    );
};
