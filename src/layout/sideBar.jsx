//Libraries
import { InteractionStatus } from '@azure/msal-browser';

//Hooks
import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { useMsal } from '@azure/msal-react';

//Components
import { Button, Col, Menu, Row } from "antd";
import Sider from "antd/es/layout/Sider";
import { LoadingOutlined, LoginOutlined, MenuOutlined } from "@ant-design/icons";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';

//Assets
import logoR from "../assets/img/logoR.png";
import { layoutStyle } from "./layoutStyle";
import { menuItems as logged, menuItemsUnlogged as unlogged } from "./menuItems";
import {  b2cPolicies } from '../config/authConfig';



export default function SideBar () {
    /**
     * States
     */
    const [collapsed, setCollapsed] = useState(false);	//Sider collapsed state
    const { instance, inProgress } = useMsal(); //Instance of the MSAL Context
    const [menuItemsUnlogged, setMenuItemsUnlogged] = useState(unlogged); //Menu items for unlogged users
    const [menuItems, setMenuItems] = useState(logged); //Menu items for logged users

    /**
     * Hooks
     */
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (inProgress != InteractionStatus.None) {
            menuItemsUnlogged[0].icon = <LoadingOutlined />;
            setMenuItemsUnlogged([...menuItemsUnlogged]);
        }
        else {
            menuItemsUnlogged[0].icon = <LoginOutlined />;
            setMenuItemsUnlogged([...menuItemsUnlogged]);
        }

        if(instance.getActiveAccount()?.name != "" && instance.getActiveAccount()?.name != undefined){
            menuItems[0] = {
                ...menuItems[0],
                label: instance.getActiveAccount()?.name,
                key: instance.getActiveAccount()?.name,
                title: instance.getActiveAccount()?.name,
            };
            setMenuItems([...menuItems]);
            if(location.pathname == '/'){
                navigate('/home');
            }
        }
    }, [inProgress, instance]);


    
    /**
     * This funciton is used to navigate through the menu
     * @param {event} e Corresponding event to the menu item clicked
     */
    function onClickMenu(e) {
        switch (e.key) {
            case '/':
            case '/home':
            case '/afps':
            case '/empleados-vigentes':
            case '/empleados-variables':
                navigate(e.key);
                break;
            case '/logout':
                logoutRedirect();
                break;
            case '/modificar-perfil':
                modiffyProfileRedirect();
                break;
        }
    }

    /**
     * This function is used to login the user
     */
    function loginRedirect() {
        menuItemsUnlogged[0].icon = 'Iniciar Sesión';
        instance.loginPopup();
    }

    /**
     * This function is used to logout the user
     */
    function logoutRedirect() {
        instance.logout();
    }

    /**
     * This function is used to modify the profile of the user
     */
    function modiffyProfileRedirect() {
        if (inProgress === InteractionStatus.None) {
            instance.acquireTokenPopup(b2cPolicies.authorities.editProfile);
        }
    }



    return (
        <Sider width={230} style={layoutStyle.siderStyle} collapsed={collapsed} collapsedWidth={100}>
                {/* Collpase Button */}
                <Row style={layoutStyle.styleCollapseButton}>
                    {!collapsed &&
                        <>
                            <Col span={4} style={{ height: '100%', display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <img src={logoR} alt="Remora" style={{ width: '100%' }} />
                            </Col>
                            <Col span={14} style={layoutStyle.titleStyle}>
                                REMORA ON FIRE
                            </Col>
                        </>
                    }
                    <Col span={collapsed ? 24 : 6} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Button onClick={() => setCollapsed(!collapsed)} style={{ border: 'none' }} ghost icon={<MenuOutlined />} />
                    </Col>
                </Row>
                {/* Login */}
                <Row style={{ padding: "0" }}>
                    <UnauthenticatedTemplate>
                        <Menu
                            mode="inline"
                            theme="dark"
                            items={menuItemsUnlogged}
                            style={layoutStyle.styleItemMenu}
                            onClick={loginRedirect}
                        />
                    </UnauthenticatedTemplate>
                    <AuthenticatedTemplate>
                        <Menu
                            defaultOpenKeys={['Reportes']}
                            mode="inline"
                            theme="dark"
                            items={menuItems}
                            style={layoutStyle.styleItemMenu}
                            onClick={onClickMenu}
                        />
                    </AuthenticatedTemplate>
                </Row>
            </Sider>
    );
}