//Assets
import { themeColors } from "../config/themeConfig";

export const layoutStyle = {
    headerStyle : {
        textAlign: 'center',
        color: '#fff',
        height: 64,
        paddingInline: 48,
        lineHeight: '64px',
        backgroundColor: themeColors.secondary,
    },
    siderStyle : {
        textAlign: 'center',
        color: '#fff',
        backgroundColor: themeColors.secondary,
        overflow: 'auto', 
        height: '100vh', 
        position: 'fixed', 
        left: 0, 
        top: 0, 
        bottom: 0
    },
    footerStyle : {
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: '100vh',
        zIndex: -1,
    },
    layoutStyle : {
        height: '100%'
    },
    titleStyle : {
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",
        fontFamily: "sans-serif",
        fontWeight: "bold",
        lineHeight: "1rem",
    },
    styleCollapseButton : { backgroundColor: themeColors.dark, 
        padding: '0.5rem', 
        maxHeight: "10%", 
        minHeight: 60
    },
    styleItemMenu: {
        gap: '1rem',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: themeColors.secondary,
        textAlign: 'left',
    }
}