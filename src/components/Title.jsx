//Libraries
import PropTypes from 'prop-types';

//Hooks

//Components
import { Typography, Card } from 'antd';


//Assets
import { themeColors } from '../config/themeConfig';

export default function Title (props) {
    
    const TitleAntd =  Typography.Title;
    
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
        <Card style={{
            marginBottom: '1rem', 
            padding: 0, 
            borderRadius: '50px', 
            backgroundColor: themeColors.secondary,
            maxHeight: '7rem',
        }}
         bodyStyle={{
            padding: 0,
            paddingLeft: '2rem'
         }}
        
        >
            <TitleAntd italic style={{ color: 'white' }}>{ props.children }</TitleAntd>
        </Card>
    );
}

Title.propTypes = {
   
}

Title.defaultProps = {

}

