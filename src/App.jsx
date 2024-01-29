//Providers
import { MsalProvider } from '@azure/msal-react';
import { BrowserRouter } from 'react-router-dom';
import {  ConfigProvider } from 'antd';
import injectContext from './flux/dispatcherContext';

//Components
import Layout from './layout/layout';
import AppRoutes from './router/appRoutes';
import { themeConfig } from './config/themeConfig';

/**
 * msal-react is built on the React context API and all parts of your app that require authentication must be
 * wrapped in the MsalProvider component. You will first need to initialize an instance of PublicClientApplication
 * then pass this to MsalProvider as a prop. All components underneath MsalProvider will have access to the
 * PublicClientApplication instance via context as well as all hooks and components provided by msal-react. For more, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/getting-started.md
 */
export default function App({ instance }) {

    const LayoutContext = injectContext(Layout);

    return (
        <MsalProvider instance={instance}>
            <ConfigProvider theme={themeConfig}>
                <BrowserRouter>
                    <LayoutContext>
                        <AppRoutes />
                    </LayoutContext>
                </BrowserRouter>    
            </ConfigProvider>
        </MsalProvider>
    );
}
