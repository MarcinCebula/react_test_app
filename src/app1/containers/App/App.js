import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppRouter from './AppRouter';
import { siteConfig } from '../../config.js';
import AppWrapper from './style';
import { Layout, Menu, Breadcrumb, Card, Row, Col } from 'antd';
import axios from 'axios';
import { aniListConfig } from '../../config'

const { Header, Content, Footer } = Layout;








export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comics: []
    };
  }


  componentDidMount() {
    var self = this
    axios.post("https://anilist.co/api/auth/access_token", aniListConfig)
         .then(function (response) {
           console.log('balah', {access_token: response.data['access_token'], token_type: response.data['token_type']})
           axios.get("https://anilist.co/api/browse/manga?access_token=" + response.data['access_token'], {access_token: response.data['access_token'], token_type: response.data['token_type']})
                  .then(function (response) {
                    console.log(response)
                    self.setState({ comics: response.data })
                  })
                  .catch(function (error) {
                    console.log(error);
                  })
         })
         .catch(function (error) {
           console.log(error);
         });
  }



  render() {

    const namesList = this.state.comics.map(anime => {
      return (
        <Col span={6} style={{height: '480px'}}>
          <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
            <div className="custom-image">
              <img alt="example" width="100%" src={anime.image_url_lge} />
            </div>
            <div className="custom-card">
              <h3>{anime.title_english}</h3>
              <p>{anime.title_romaji}</p>
            </div>
          </Card>
        </Col>
      )
    })


    const { url } = this.props.match;
    return (
      <AppWrapper>
        <Layout style={{backgroundColor: 'white'}}>
          <Header>
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
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <h1>APP 1: Content</h1>
              <div>
                <Row gutter={16}>
                  {namesList}
                </Row>
              </div>
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
