import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../config/authConfig";

export const Home = () => {
    const { instance } = useMsal();

    const handleLogin = () => {
        instance.loginRedirect(loginRequest).catch(e => {
            console.error(e);
        });
    };

    return (
        <div className="home-container">

            <header className="header" id="inicio">
                <div className="header-content">
                    <h1 className="title">Descubre el Arte en Cada Rincón</h1>
                    <p className="subtitle">Explora nuestra colección curada de obras contemporáneas y clásicas.</p>
                    <div className="login-section">
                        <p className="login-prompt">Únete a nuestra comunidad para una experiencia completa</p>
                        <button className="login-button" onClick={handleLogin}>
                            Iniciar Sesión con Entra ID
                        </button>
                    </div>
                </div>
            </header>

            <main className="gallery" id="obras">
                <div className="art-card">
                    <div className="art-placeholder">
                        <span className="art-emoji">🎨</span>
                    </div>
                    <div className="art-info">
                        <h3>Obra I - Pinceladas</h3>
                        <p>Una expresión de color y movimiento.</p>
                    </div>
                </div>
                <div className="art-card">
                    <div className="art-placeholder">
                        <span className="art-emoji">🗿</span>
                    </div>
                    <div className="art-info">
                        <h3>Obra II - Escultura</h3>
                        <p>Formas sólidas que cuentan una historia.</p>
                    </div>
                </div>
                <div className="art-card">
                    <div className="art-placeholder">
                        <span className="art-emoji">📸</span>
                    </div>
                    <div className="art-info">
                        <h3>Obra III - Instantes</h3>
                        <p>Capturando la esencia del momento.</p>
                    </div>
                </div>
                <div className="art-card">
                    <div className="art-placeholder">
                        <span className="art-emoji">🎭</span>
                    </div>
                    <div className="art-info">
                        <h3>Obra IV - Drama</h3>
                        <p>Emociones plasmadas en el lienzo.</p>
                    </div>
                </div>
            </main>
        </div>
    );
};
