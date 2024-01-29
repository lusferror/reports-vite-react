//Components
import { default as LayoutAntd } from "antd/es/layout/layout";
import { Content, Footer } from "antd/es/layout/layout";
import SideBar from "./sideBar";

//Assets
import { layoutStyle } from "./layoutStyle";
import Spinner from "../components/Spinner";

export default function Layout({ children }) {
    /**
     * States
     */
    

    return (
        <LayoutAntd style={layoutStyle.layoutStyle}>
            <SideBar />
            <LayoutAntd style={{ marginLeft: 230 }}>
                {/* <Header style={headerStyle}>Header</Header> */}
                <Content style={{ padding: '2rem' }}>
                    <Spinner />
                    {children}
                </Content>
                <Footer style={layoutStyle.footerStyle}></Footer>
            </LayoutAntd>
        </LayoutAntd>

    );
}