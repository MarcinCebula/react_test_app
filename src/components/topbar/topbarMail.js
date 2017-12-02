import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Popover from '../uielements/popover';
import TopbarDropdownWrapper from './topbarDropdown.style';

const demoMails = [
  {
    id: 1,
    name: 'David Doe',
    time: '3 minutes ago',
    desc:
      'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner',
  },
  {
    id: 2,
    name: 'Navis Doe',
    time: '4 minutes ago',
    desc:
      'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner',
  },
  {
    id: 3,
    name: 'Emanual Doe',
    time: '5 minutes ago',
    desc:
      'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner',
  },
  {
    id: 4,
    name: 'Dowain Doe',
    time: '6 minutes ago',
    desc:
      'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner',
  },
  {
    id: 5,
    name: 'Frank Doe',
    time: '8 minutes ago',
    desc:
      'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner',
  },
  {
    id: 6,
    name: 'Jane Doe',
    time: '10 minutes ago',
    desc:
      'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner',
  },
  {
    id: 7,
    name: 'Kate Doe',
    time: '11 minutes ago',
    desc:
      'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner',
  },
];

class TopbarMail extends Component {
  constructor(props) {
    super(props);
    this.handleVisibleChange = this.handleVisibleChange.bind(this);
    this.hide = this.hide.bind(this);
    this.state = {
      mails: demoMails,
      visible: false,
    };
    window.addMail = () => this.addMail();
  }
  hide() {
    this.setState({ visible: false });
  }
  handleVisibleChange() {
    this.setState({ visible: !this.state.visible });
  }
  addMail() {
    const newMail = {...this.state.mails.slice(-1)[0]}
    newMail.id++;
    this.setState({
      mails: this.state.mails.concat([newMail])
    })    
  }
  render() {
    const { url, customizedTheme } = this.props;
    const { mails, visible } = this.state
    const content = (
      <TopbarDropdownWrapper className="topbarMail">
        <div className="isoDropdownHeader">
          <h3>Email</h3>
        </div>
        <div className="isoDropdownBody">
          {demoMails.map(mail =>
            <Link to={`${url}/mailbox`} onClick={this.hide} key={mail.id}>
              <div className="isoDropdownListItem">
                <div className="isoListHead">
                  <h5>
                    {mail.name}
                  </h5>
                  <span className="isoDate">
                    {mail.time}
                  </span>
                </div>
                <p>
                  {mail.desc}
                </p>
              </div>
            </Link>
          )}
        </div>
        <a className="isoViewAllBtn">View All</a>
      </TopbarDropdownWrapper>
    );
    return (
      <Popover
        content={content}
        trigger="click"
        visible={visible}
        onVisibleChange={this.handleVisibleChange}
        placement="bottomLeft"
      >
        <div className="isoIconWrapper">
          <i
            className="ion-email"
            style={{ color: customizedTheme.textColor }}
          />
          <span>
            {mails.length}
          </span>
        </div>
      </Popover>
    );
  }
}

export default connect(state => ({
  ...state.App.toJS(),
  customizedTheme: state.ThemeSwitcher.toJS().topbarTheme,
}))(TopbarMail);
