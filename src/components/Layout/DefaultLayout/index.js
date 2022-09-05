import HeaderDefault from './Header';
import SideBar from './SideBar';
import { Layout, Menu } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

function DefaultLayout({ children }) {
    return (
        <div>
            <HeaderDefault></HeaderDefault>
            <div className="container">
                {/* <SideBar></SideBar> */}

                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
