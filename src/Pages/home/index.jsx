//Libraries
import { InteractionType } from "@azure/msal-browser";

//Hooks

//Components
import { MsalAuthenticationTemplate } from "@azure/msal-react";
import { Col, Row } from "antd";

//Assets
import Noticias from "./noticias";
import ValoresMes from "./valoresMes";
import { loginRequest } from "../../config/authConfig";



export default function Home () {
    /**
     * States
     */
    const authRequest = { ...loginRequest };

    /**
     * Hooks
     */


    /**
     * Methods
     */



    return (
        <MsalAuthenticationTemplate
            interactionType={InteractionType.Popup}
            authenticationRequest={authRequest}
        >
            <Row justify={'space-between'}  >
                <Col flex={1} style={{marginRight: '1rem'}}>
                    <Noticias />
                </Col>
                <Col flex={1}>
                    <ValoresMes />
                </Col>
            </Row>
        </MsalAuthenticationTemplate>
    );
}