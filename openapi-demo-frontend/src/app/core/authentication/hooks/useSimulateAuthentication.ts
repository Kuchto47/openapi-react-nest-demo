import { useEffect } from 'react';
import { notifyAuthenticationListeners } from '../services/authenticationListener.ts';

export const useSimulateAuthentication = () => {
    useEffect(() => {
        // Shall be called eg. in AuthProvider when user is signed in, to notify all listeners about the new token
        notifyAuthenticationListeners('EXAMPLE_DEMO_TOKEN')
    }, []);
}