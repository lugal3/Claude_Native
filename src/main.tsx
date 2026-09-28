import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PublicClientApplication, EventType } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './config/authConfig';
import App from './App.tsx';
import './index.css';

// Instancia de MSAL
const msalInstance = new PublicClientApplication(msalConfig);

// Inicializa la instancia antes de renderizar (requerido en versiones recientes)
msalInstance.initialize().then(() => {
    // Escucha eventos opcionales, como login exitoso para redirigir
    msalInstance.addEventCallback((event: any) => {
        if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
            msalInstance.setActiveAccount(event.payload.account);
            // Opcional: Redirigir al dashboard u otra ruta después de login
            window.location.href = '/dashboard';
        }
    });

    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <MsalProvider instance={msalInstance}>
                <App />
            </MsalProvider>
        </StrictMode>,
    );
});
