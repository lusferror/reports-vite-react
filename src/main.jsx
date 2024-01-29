import ReactDOM from 'react-dom/client'
import { PublicClientApplication, EventType } from '@azure/msal-browser';
import { msalConfig, msalConfigDev } from './config/authConfig.js';
import App from './App.jsx'
import './assets/css/index.css'

/**
 * MSAL should be instantiated outside of the component tree to prevent it from being re-instantiated on re-renders.
 * For more, visit: https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/getting-started.md
 */
const currentUrl = window.location.href;

const msalConfigCurrent = currentUrl.includes('localhost') ? msalConfigDev : msalConfig;

export const msalInstance = new PublicClientApplication(msalConfigCurrent);

// Default to using the first account if no account is active on page load
if (!msalInstance.getActiveAccount() && msalInstance.getAllAccounts().length > 0) {
    // Account selection logic is app dependent. Adjust as needed for different use cases.
    msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
}

msalInstance.addEventCallback((event) => {
    if ((event.eventType === EventType.LOGIN_SUCCESS ||
        event.eventType === EventType.ACQUIRE_TOKEN_SUCCESS ||
        event.eventType === EventType.SSO_SILENT_SUCCESS) &&
        event.payload.account
    ) {
        msalInstance.setActiveAccount(event.payload.account);
    }
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App instance={msalInstance}/>
    </React.StrictMode>,
)
