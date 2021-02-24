import React from 'react';
// import PropTypes from 'prop-types';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { TableOutlined, ClusterOutlined, ContactsOutlined } from '@ant-design/icons';
import './MainLayout.less';
import UserIcon from '../../UserIcon/UserIcon';
import SignIn from '../pages/SignIn';

const { Header, Sider } = Layout;

const rootRoutes = ['/', '/about',];
// const aboutSubRoutes = ['/about/me', '/about/company'];

export default class MainLayout extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      const { children, isAuth } = this.props;
      return (
        <Layout style = {{height:"100vh"}}>
            <Header className="header">
                <div className="logo" >ABOBA</div>
                <Menu theme="dark" mode="horizontal" >
                    <Menu.Item key="1">
                        <Link to = "/signin">SignIn</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to = "/signup">SignUp</Link>
                    </Menu.Item>
                </Menu>
            </Header>
          
            <Layout>
                <Layout style={{ padding: '0 24px 24px' }}>
                    {children}
                </Layout>
                
                {isAuth? <Sider className="site-layout-background">
                    <UserIcon/>
                    <Menu
                        // theme="dark"
                        mode="inline"
                        style={{ height: '100%', borderRight: 0 }}
                        defaultSelectedKeys={[
                        rootRoutes.indexOf(window.location.pathname).toString(),
                        ]}
                    >
                        <Menu.Item key="0">
                            <Link to="/">
                                <TableOutlined />
                                <span className="menu-item-link">1</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="1">
                            <Link to="/about">
                                <ClusterOutlined />
                                <span className="menu-item-link">2</span>
                            </Link>
                        </Menu.Item>
                        {/* <Menu.Item key="2">
                            <Link to="/contact">
                                <ContactsOutlined />
                                <span className="menu-item-link">3</span>
                            </Link>
                        </Menu.Item> */}
                    </Menu>
                </Sider>: null}
            </Layout>
        </Layout>
      );
    }
  }