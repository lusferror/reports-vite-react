//Libraries
import { InteractionType } from '@azure/msal-browser';

//Hooks
import { useState, useEffect, useContext } from "react";
import { MsalAuthenticationTemplate } from '@azure/msal-react';
import { loginRequest, protectedResources } from "../../config/authConfig";
import useFetchWithMsal from '../../hooks/useFetchWithMsal';
import { Context } from "../../flux/dispatcherContext";

//Components
import Table from '../../components/Table';
import Title from '../../components/Title';

//Assets

export default function EmpleadosVigentesReport () {
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
		let query = '/empleados?rep=emplVigCant&fini=20230901&ffin=20231001&clienteID=1'
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
            {/* TITILE */}
            <Title >
                Empleados Vigentes
            </Title>
                
            {/* TABLE */}
            <Table data={reportData} />
        </MsalAuthenticationTemplate>
    );
}