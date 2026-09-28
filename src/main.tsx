import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  PublicClientApplication,
  EventType
} from '@azure/msal-browser';

import type {
  EventMessage,
  AuthenticationResult
} from '@azure/msal-browser';

import { MsalProvider } from '@azure/msal-react';

import { msalConfig } from './authConfig';

import App from './App';

import './index.css';
import './stiles.css';

// Crear la instancia global de MSAL
const msalInstance =
  new PublicClientApplication(msalConfig);

// Registrar eventos de autenticación
msalInstance.addEventCallback(
  (event: EventMessage) => {

    if (
      event.eventType === EventType.LOGIN_SUCCESS &&
      event.payload
    ) {

      const payload =
        event.payload as AuthenticationResult;

      msalInstance.setActiveAccount(
        payload.account
      );
    }
  }
);

// Inicializar MSAL antes de renderizar React
msalInstance.initialize().then(() => {

  // Recuperar sesión previa si existe
  if (
    !msalInstance.getActiveAccount() &&
    msalInstance.getAllAccounts().length > 0
  ) {

    msalInstance.setActiveAccount(
      msalInstance.getAllAccounts()[0]
    );
  }

  ReactDOM
    .createRoot(
      document.getElementById('root')!
    )
    .render(

      <React.StrictMode>

        <MsalProvider instance={msalInstance}>

          <App />

        </MsalProvider>

      </React.StrictMode>
    );
});