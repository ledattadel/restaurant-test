import HeaderDefaul from './Header';
import SideBar from './Sidebar';
import TitlePages from './TitlePages';
import { Layout } from 'antd';
const { Content } = Layout;

function DefaultLayout({ children }) {
    return (
        <Layout>
            <SideBar />
            <Layout>
                <HeaderDefaul/>
                <div className="container">
                    <div className="main">
                        <TitlePages/>
                        <Content>{children}</Content>
                    </div>
                </div>
            </Layout>
        </Layout>
    );
}

export default DefaultLayout;
