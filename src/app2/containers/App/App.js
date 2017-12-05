import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppRouter from './AppRouter';
import { siteConfig } from '../../config.js';
import AppWrapper from './style';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;



export class App extends Component {
  render() {
    const { url } = this.props.match;
    return (
      <AppWrapper>
        <Layout style={{backgroundColor: 'white'}}>
          <Header theme="Light">
            <div className="logo" />
            <Menu
              theme="Light"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">Example 1</Menu.Item>
              <Menu.Item key="2">Example 2</Menu.Item>
              <Menu.Item key="3">Example 3</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content
              <h1>APP 1: Content</h1>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Learn React with <strong>Rocket3.io</strong> ©2017 Created by <b>Marcin K Cebula</b>
          </Footer>
        </Layout>
      </AppWrapper>
    );
  }
}

export default connect(
  state => ({ }),  { }
)(App);
