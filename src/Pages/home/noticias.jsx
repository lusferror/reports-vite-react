//Hooks
import { useState, useEffect, useContext } from "react";

//Components
import { Divider, Row, Typography } from "antd";
import Card from "../../components/Card";

//Assets
import { themeColors } from "../../config/themeConfig";
import { RightSquareTwoTone } from "@ant-design/icons";

const newsData = [
    {
        title: 'Nueva Funcionalidad',
        content: 'Hemos añadido una emocionante nueva funcionalidad a nuestra aplicación.',
    },
    {
        title: 'Evento Especial',
        content: 'Participa en nuestro evento especial que tendrá lugar el próximo mes.',
    },
    {
        title: "Sueldo Mínimo",
        content: "Desde este mes el salario mínimo es de $460.000",
    },
    {
        title: "Nuevo Recepcionista",
        content: "Se ingresó a Jorge Ahumada como recepcionista"
    }
];

export default function Noticias() {
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
        <Card title="NOTICIAS" style={{ width: '100%' }} headStyle={{color: 'white'}}>
            {
                newsData.map((news, index) => {
                    return (
                        <div key={'new' + index}>
                            <Row style={{ flexDirection: "column"}} >
                                <Row style={{}}>
                                    <RightSquareTwoTone />
                                    <Typography.Text strong style={{color: themeColors.primary, marginLeft: '1rem'}}>
                                        {news.title}
                                    </Typography.Text>
                                </Row>
                                <Row>{news.content}</Row>
                                <Divider />
                            </Row>
                        </div>
                    )
                })
            }
        </Card>
    );
}