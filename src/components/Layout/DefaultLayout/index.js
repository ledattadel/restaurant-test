import React from 'react';
import { useLocation } from 'react-router-dom';
import { Layout } from 'antd';
import SideBar from './SideBar';
import DefaultHeader from './Header';
import Breadcrumb from '@/components/Breadcrumb';

const { Content } = Layout;

function DefaultLayout({ children }) {
    const location = useLocation();
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
                <DefaultHeader collapsed={collapsed} onHandleCollapsed={handleCollapsed} />
                {/* <Breadcrumb title={titleBreadcum} setRouteBreadcumRender={setRouteBreadcumRender} /> */}

                {location.pathname === '/' ? (
                    <></>
                ) : (
                    <Breadcrumb title={titleBreadcum} setRouteBreadcumRender={setRouteBreadcumRender} />
                )}

                <div className="container">
                    <Content>{children}</Content>
                </div>
            </Layout>
        </Layout>
    );
}
export default DefaultLayout;
