//Libraries
import { InteractionType } from '@azure/msal-browser';

//Hooks
import { useState, useEffect, useContext } from "react";
import { MsalAuthenticationTemplate } from '@azure/msal-react';
import useFetchWithMsal from '../../hooks/useFetchWithMsal';
import { loginRequest, protectedResources } from "../../config/authConfig";
import { Context } from '../../flux/dispatcherContext';

//Components
import Title from '../../components/Title';
import Spinner from '../../components/Spinner';
import Table from '../../components/Table';

//Assets



export default function EmpleadosVariablesReport () {
    const { endpoint, scopes: { read } } =  protectedResources.apiReportsV2;
    const { actions: { windowLoading } , store: { loading} } = useContext(Context);
    /**
     * States
     */
    const [ reportData , setReportData ] = useState([]); // Data for table
    const { execute } = useFetchWithMsal({ scopes: read }); // Hook to make calls to MS Graph API
    
    /**
     * Hooks
    */
   useEffect(() => {
            windowLoading(true);
            request();
    }, []);

    /**
     * This function makes the request to the API
     */
    async function request() {
        !loading && windowLoading(true);
		let query = '/tablas?rep=afps';
		let endpointUrl = endpoint + query;
		await execute('GET', endpointUrl)
			.then((response) => {
                setReportData(response.data);
			})
            .catch((error) => {
                console.log(error);
            })
            .finally(() => windowLoading(false));
	}



    return (
        <MsalAuthenticationTemplate 
            interactionType={InteractionType.Redirect}
            authenticationRequest={loginRequest}
        >

            <Title>
                Empleados Variables 
            </Title>

            <Table data={reportData} pageSize={10}/>

        </MsalAuthenticationTemplate>
    );
}