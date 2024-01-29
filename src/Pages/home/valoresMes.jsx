//Hooks
import { useState, useEffect, useContext } from "react";

//Components
import { Divider, Row, Table, Typography } from "antd";
import Card from "../../components/Card";

//Assets

const keysData = [
    {
        dataIndex: 'currency',
        key: 'currency',
        title: 'Moneda',
        rowScope: 'row'
    },
    {
        dataIndex: 'value',
        key: 'value',
        title: 'Valor',
    },
];

const valuesData = [
    {
        key:'1',
        currency: 'UF',
        value: '$36000',
    },
    {
        key:'2',
        currency:'UTM',
        value: '$63000',
    },
    {
        key:'3',
        currency: 'Salario Minimo',
        value: '$450000',
    },
    {
        key:'4',
        currency: 'Total Empleados',
        value: '435',
    },
];

export default function ValoresMes() {
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
        <Card title="VALORES MES" style={{ width: '100%' }}>
            <Table columns={keysData} dataSource={valuesData} pagination={false} />
        </Card>
    );
}