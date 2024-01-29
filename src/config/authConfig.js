/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { LogLevel } from "@azure/msal-browser";

/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
export const b2cPolicies = {
    names: {
        signUpSignIn: 'B2C_1_susi',
        forgotPassword: 'B2C_1_reset',
        editProfile: 'B2C_1_edit_profile',
    },
    authorities: {
        signUpSignIn: {
            authority: 'https://remoraonfire.b2clogin.com/remoraonfire.onmicrosoft.com/b2c_1_susi',
        },
        forgotPassword: {
            authority: 'https://remoraonfire.b2clogin.com/remoraonfire.onmicrosoft.com/B2C_1_reset',
        },
        editProfile: {
            authority: 'https://remoraonfire.b2clogin.com/remoraonfire.onmicrosoft.com/b2c_1_edit_profile',
        },
    },
    authorityDomain: 'remoraonfire.b2clogin.com',
};


/**
 * Configuration object to be passed to MSAL instance on creation. 
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md 
 */

export const msalConfigDev = {
    auth: {
        clientId: '57c406f3-15fa-496e-8fd3-130ede422104', // This is the ONLY mandatory field that you need to supply.
        authority: b2cPolicies.authorities.signUpSignIn.authority, // Choose SUSI as your default authority.
        knownAuthorities: [b2cPolicies.authorityDomain], // Mark your B2C tenant's domain as trusted.
        redirectUri: '/', // You must register this URI on Azure Portal/App Registration. Defaults to window.location.origin
        postLogoutRedirectUri: '/', // Indicates the page to navigate after logout.
        navigateToLoginRequestUrl: false, // If "true", will navigate back to the original request location before processing the auth code response.
    },
    cache: {
        cacheLocation: 'sessionStorage', // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }
            },
        },
    },
};

export const msalConfig = {
    auth: {
        clientId: 'ce504e3a-ded2-43ac-8f92-5f3e1b3fb3a2', // This is the ONLY mandatory field that you need to supply.
        authority: b2cPolicies.authorities.signUpSignIn.authority, // Choose SUSI as your default authority.
        knownAuthorities: [b2cPolicies.authorityDomain], // Mark your B2C tenant's domain as trusted.
        redirectUri: '/', // You must register this URI on Azure Portal/App Registration. Defaults to window.location.origin
        postLogoutRedirectUri: '/', // Indicates the page to navigate after logout.
        navigateToLoginRequestUrl: false, // If "true", will navigate back to the original request location before processing the auth code response.
    },
    cache: {
        cacheLocation: 'sessionStorage', // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }
            },
        },
    },
};

/**
 * Add here the endpoints and scopes when obtaining an access token for protected web APIs. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
export const protectedResources = {
    apiReports: {
        endpoint: 'https://onfire-gateway.azurewebsites.net/api/reportes',
        scopes: {
            read: ['https://remoraonfire.onmicrosoft.com/9c423f16-f2b3-415f-b565-da0156a83e57/reports.read'],
            write: ['https://remoraonfire.onmicrosoft.com/9c423f16-f2b3-415f-b565-da0156a83e57/reports.write'],
        }, 
    },

    apiReportsV2: {
        endpoint: 'https://onfire-gateway.azurewebsites.net/api/v2/reportes',
        scopes: {
            read: ['https://remoraonfire.onmicrosoft.com/9c423f16-f2b3-415f-b565-da0156a83e57/reports.read'],
            write: ['https://remoraonfire.onmicrosoft.com/9c423f16-f2b3-415f-b565-da0156a83e57/reports.write'],
        }, 
    },

    apiUser: {
        endpoint: 'https://onfire-gateway.azurewebsites.net/api/user',
        scopes: {
            read: ['https://remoraonfire.onmicrosoft.com/9c423f16-f2b3-415f-b565-da0156a83e57/user.read'],
            write: ['https://remoraonfire.onmicrosoft.com/9c423f16-f2b3-415f-b565-da0156a83e57/user.write'],
        }, 
    },

    apiCompany: {
        endpoint: 'https://onfire-gateway.azurewebsites.net/api/Company',
        scopes: {
            read: ['https://remoraonfire.onmicrosoft.com/9c423f16-f2b3-415f-b565-da0156a83e57/company.read'],
            write: ['https://remoraonfire.onmicrosoft.com/9c423f16-f2b3-415f-b565-da0156a83e57/company.write'],
        }, 
    },
    
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit: 
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
    scopes: [ ],
};
