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
import Table from '../../components/Table';

//Assets



export default function EmpleadosVariablesReport () {
    const read =  protectedResources.apiReports.scopes.read;
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


    async function request() {
        !loading && windowLoading(true);
		let query = '/empleados?rep=varPorEmpl&clienteID=2&empresaID=4&mesProcesoDesde=20230901&mesProcesoHasta=20230901&userId=04e06646-37f4-46d6-b1e5-3b4e2b050c93'
		let endpointUrl = protectedResources.apiReports.endpoint + query;
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

            <Table data={reportData} pageSize={10} />

        </MsalAuthenticationTemplate>
    );
}