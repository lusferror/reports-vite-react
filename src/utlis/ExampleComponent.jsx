//Libraries
import { InteractionType } from '@azure/msal-browser';
import PropTypes from 'prop-types';

//Hooks
import { useState, useEffect, useContext } from "react";
import { MsalAuthenticationTemplate } from '@azure/msal-react';
import { loginRequest, protectedResources } from "../../authConfig";
import useFetchWithMsal from '../../hooks/useFetchWithMsal';
import { Context } from "../flux/dispatcherContext";

//Components
import Title from '../components/Title';

//Assets
import Remora from "../assets/img/logoremora.png"
import { themeColors } from '../../themeConfig';



export default function MyComponent () {
    /**
     * States
     */
    const authRequest = { ...loginRequest };
    const { store: { activeAccount }, actions } = useContext(Context);


    /**
     * Hooks
     */


    /**
     * Methods
     */



    return (
        <MsalAuthenticationTemplate
            interactionType={InteractionType.Redirect}
            authenticationRequest={authRequest}
        >
            {/* TITLE */}
            <Title> My componen</Title>
        </MsalAuthenticationTemplate>
    );
}

MyComponent.propTypes = {
   
}

MyComponent.defaultProps = {

}