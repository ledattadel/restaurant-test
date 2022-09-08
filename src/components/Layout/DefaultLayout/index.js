import HeaderDefaul from './Header';
import SideBar from './SideBar';
import TitlePages from './TitlePages';
import { Layout } from 'antd';
import * as React from 'react';

const { Content } = Layout;

function DefaultLayout({ children }) {
    const [collapsed, setCollapsed] = React.useState(false);
    const [titleBreadcum, setTitleBreadcum] = React.useState('');
    const [renderBreadcum, setRenderBreadcum] = React.useState('');

    function handleCollapsed(collapsed) {
        setCollapsed(collapsed);
    }

    function setBreadcum(titleBreadcum) {
        setTitleBreadcum(titleBreadcum);
    }

    function setRouteBreadcumRender(breadcumRender) {
        setRenderBreadcum(breadcumRender);
    }

    return (
        <Layout>
            <SideBar collapsed={collapsed} setBreadcum={setBreadcum} renderBreadcum={renderBreadcum} />
            <Layout>
                <HeaderDefaul collapsed={collapsed} onHandleCollapsed={handleCollapsed} />
                <TitlePages title={titleBreadcum} setRouteBreadcumRender={setRouteBreadcumRender} />
                <div className="container">
                    <Content>{children}</Content>
                </div>
            </Layout>
        </Layout>
    );
}

export default DefaultLayout;
