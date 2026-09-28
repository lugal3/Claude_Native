export const msalConfig = {
    auth: {
        clientId: "TU_CLIENT_ID", // Reemplazar con el Application (client) ID de Azure
        authority: "https://login.microsoftonline.com/TU_TENANT_ID", // Reemplazar TU_TENANT_ID con tu Directory (tenant) ID
        redirectUri: "TU_REDIRECT_URI", // Reemplazar con tu Redirect URI, ej. http://localhost:5173
    },
    cache: {
        cacheLocation: "sessionStorage", // Recomendado para SPA
        storeAuthStateInCookie: false,
    }
};

// Configuración de los scopes para el login
export const loginRequest = {
    scopes: ["User.Read"] // Aquí podrías agregar scopes personalizados de tu API (ej. api://TU_CLIENT_ID/access_as_user)
};

// Configuración para acceder al backend (API Gateway protegido)
export const apiConfig = {
    backendEndpoint: "TU_API_GATEWAY_URL/api/obras", // Reemplaza con tu URL de AWS API Gateway
    protectedResourceScopes: ["api://TU_CLIENT_ID/access_as_user"] // Scopes requeridos por tu API Gateway si usas JWT Authorizer con validación de scopes
};
