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
            <header className="header">
                <h1 className="title">amirgo</h1>
                <p className="subtitle">Galería de Arte Minimalista</p>
                <button className="login-button" onClick={handleLogin}>
                    Iniciar Sesión
                </button>
            </header>

            <main className="gallery">
                <div className="art-card">
                    <div className="art-placeholder"></div>
                    <p>Obra I - Silencio</p>
                </div>
                <div className="art-card">
                    <div className="art-placeholder"></div>
                    <p>Obra II - Vacío</p>
                </div>
                <div className="art-card">
                    <div className="art-placeholder"></div>
                    <p>Obra III - Luz</p>
                </div>
            </main>
        </div>
    );
};
