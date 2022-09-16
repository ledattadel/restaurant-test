import { Content } from 'antd/es/layout/layout';
import './index.scss'
export const ContentFnB=(props)=>{
    return  <Content className={`content-fnb ${props.className}`}>{props.children}</Content>
}