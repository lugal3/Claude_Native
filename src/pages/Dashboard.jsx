import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getObras } from "../services/api";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    const [apiData, setApiData] = useState(null);
    const [error, setError] = useState(null);
    const [claims, setClaims] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (currentUser) {
                try {
                    const data = await getObras();
                    setApiData(data);
                    
                    const tokenResult = await currentUser.getIdTokenResult();
                    setClaims(tokenResult.claims);
                } catch (err) {
                    setError("Error al obtener los datos de la API. Revisa CORS y configuración.");
                }
            }
        };

        fetchData();
    }, [currentUser]);

    const handleLogout = async () => {
        await logout();
        navigate("/");
    };

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h2>Dashboard de amirgo</h2>
                <button className="logout-button" onClick={handleLogout}>Cerrar Sesión</button>
            </header>

            <section className="claims-section">
                <h3>Bienvenido, {currentUser?.displayName || currentUser?.email}</h3>
                <p><strong>Email:</strong> {currentUser?.email}</p>
                
                <div className="json-box">
                    <h4>Claims del Token (incluye Roles si existen):</h4>
                    <pre>{JSON.stringify(claims, null, 2)}</pre>
                </div>
            </section>

            <section className="api-section">
                <h3>Datos de AWS API Gateway</h3>
                {error ? (
                    <p className="error-text">{error}</p>
                ) : apiData ? (
                    <div className="json-box">
                        <pre>{JSON.stringify(apiData, null, 2)}</pre>
                    </div>
                ) : (
                    <p>Cargando datos protegidos...</p>
                )}
            </section>
        </div>
    );
};
