//Libraries

//Hooks

//Components
import { Card as CardAntd } from "antd";

//Assets



export default function Card (props) {
    /**
     * States
     */


    /**
     * Hooks
     */


    /**
     * Methods
     */



    return (
        <CardAntd headStyle={props.headStyle} {...props} >
            {props.children}
        </CardAntd>
    );
}

Card.defaultProps = {
    headStyle: {
        color: 'white'
    },  
}