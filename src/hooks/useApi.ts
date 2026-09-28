import { useMsal } from "@azure/msal-react";
import { apiConfig } from "../config/authConfig";

export const useApi = () => {
    const { instance, accounts } = useMsal();

    const getAccessToken = async () => {
        const request = {
            scopes: apiConfig.protectedResourceScopes,
            account: accounts[0]
        };

        try {
            // Intenta obtener token silenciosamente
            const response = await instance.acquireTokenSilent(request);
            return response.accessToken;
        } catch (error) {
            console.warn("Silent token acquisition failed. Acquiring token using redirect.", error);
            // Fallback a login
            instance.acquireTokenRedirect(request);
            return null;
        }
    };

    return { getAccessToken };
};
