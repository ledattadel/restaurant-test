import HeaderDefaul from './Header';
import SideBar from './SideBar';
import TitlePages from './TitlePages';
import { Layout } from 'antd';
const { Content } = Layout;

function DefaultLayout({ children }) {
    return (
        <Layout>
            <SideBar />
            <Layout>
                <HeaderDefaul />
                <TitlePages />
                <div className="container">
                    <Content>{children}</Content>
                </div>
            </Layout>
        </Layout>
    );
}

export default DefaultLayout;
