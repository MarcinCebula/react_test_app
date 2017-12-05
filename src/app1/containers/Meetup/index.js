import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Icon } from 'antd';
import { ContactsWrapper } from './contacts.style';


const { Sider, Content } = Layout;
class Meetup extends Component {
  render() {
    const {  } = this.props;
    return (
      <div>
        <h1>Meetup</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // const { contacts, seectedId, editView } = state.Contacts.toJS();
  return { };
}
export default connect(mapStateToProps, {})(Meetup);
