import React, { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import { useApi } from "../hooks/useApi";
import { getObras } from "../services/api";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
    const { instance, accounts } = useMsal();
    const { getAccessToken } = useApi();
    const navigate = useNavigate();

    const [apiData, setApiData] = useState(null);
    const [error, setError] = useState(null);

    const account = accounts[0];

    useEffect(() => {
        const fetchData = async () => {
            const token = await getAccessToken();
            if (token) {
                try {
                    const data = await getObras(token);
                    setApiData(data);
                } catch (err) {
                    setError("Error al obtener los datos de la API. Revisa CORS y configuración.");
                }
            }
        };

        if (account) {
            fetchData();
        }
    }, [account, getAccessToken]);

    const handleLogout = () => {
        instance.logoutRedirect({
            postLogoutRedirectUri: "/",
        });
    };

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h2>Dashboard de amirgo</h2>
                <button className="logout-button" onClick={handleLogout}>Cerrar Sesión</button>
            </header>

            <section className="claims-section">
                <h3>Bienvenido, {account?.name}</h3>
                <p><strong>Email:</strong> {account?.username}</p>
                
                <div className="json-box">
                    <h4>Claims del Token (incluye Roles si existen):</h4>
                    <pre>{JSON.stringify(account?.idTokenClaims, null, 2)}</pre>
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
