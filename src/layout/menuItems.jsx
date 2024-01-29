import { 
    AuditOutlined, 
    BarChartOutlined, 
    BuildOutlined, 
    HomeOutlined, 
    LoginOutlined, 
    LogoutOutlined, 
    ToolOutlined, 
    UserOutlined, 
    UsergroupDeleteOutlined 
} from "@ant-design/icons";

//Items of menu for unlogged users
export const menuItemsUnlogged = [
    { 
        key: '/login', 
        title: 'Iniciar Sesión', 
        label: 'Iniciar Sesión', 
        icon: <LoginOutlined />
    }];

//Items of menu for logged users
export const menuItems = [
    {
        key: 'Desconocido',
        title: 'Desconocido',
        icon: <UserOutlined />,
        label: 'Luis Robles',
        children:[
            {
                key: '/modificar-perfil',
                title: 'Modificar Perfil',
                label: 'Modificar Perfil',
                icon: <ToolOutlined />,
            },
            {
                key: '/logout',
                title: 'Logout',
                label: 'Logout',
                icon: <LogoutOutlined />,
            }
        ]
    },
    {
        key: '/home',
        title: 'Home',
        icon: <HomeOutlined />,
        label: 'Home'
    },
    {
        key: 'Reportes',
        label: 'Reportes',
        icon: <BarChartOutlined />,
        children: [
            {
                key: '/empleados-vigentes',
                title: 'Empleados Vigentes',
                icon: <AuditOutlined />,
                label: 'Empleados Vigentes'
            },
            {
                key: '/empleados-variables',
                title: 'Empleados Variables',
                icon: <UsergroupDeleteOutlined />,
                path: '/empleados-variables',
                label: 'Empleados Variables',
            },
            {
                key: '/afps',
                title: 'Afps',
                icon: <BuildOutlined />,
                label: 'Afps',
            }
        ]
    },

];