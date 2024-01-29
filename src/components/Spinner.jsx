//Libraries
import PropTypes from 'prop-types';

//Hooks
import { useContext } from 'react';

//Components
import { Context } from "../flux/dispatcherContext";

//Assets
import Remora from "../assets/img/logoR.png"


export default function Spinner () {
    const { store: { loading } } = useContext(Context);

    const backgroundStyle = {
        zIndex: 1,
        position: 'fixed',
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: "rgb(0, 0, 0, 0.4)",
    };

    const spinnerStyle = {
        width: '8rem',
        height: '8rem',
        borderWidth: '1.5rem',
        animation: 'mymove 3s infinite',
    };

    return (
        <div style={{...backgroundStyle, display: loading ? 'flex': 'none'}}>
            <img src={Remora} style={spinnerStyle} />
        </div>
    );
}
