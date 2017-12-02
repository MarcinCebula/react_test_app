import React, { Component } from 'react';
import { Row, Col, Steps, Icon, Button } from 'antd';
import basicStyle from '../../config/basicStyle';

import DeleteButton from './deleteButton';
// import contactAction from '../../redux/formBuilder/actions';

const { rowStyle, colStyle, gutter } = basicStyle;
const Step = Steps.Step;




// const {
//   viewChange,
// } = contactAction;


class FormBuilderStep extends Component {

  render() {
    const {
      title,
      description,
      viewState
    } = this.props;
    var editView = true;
    const onVIewChange = () => console.log('editView', editView); editView = !editView;

    return (
		  <div className="ant-steps-item ant-steps-status-finish" style={{paddingBottom: '7px'}}>
			  <div className="ant-steps-step">
				  <div className="ant-steps-head">
					  <div className="ant-steps-head-inner">
						  <span className="ant-steps-icon anticon"></span>
					  </div>
				  </div>
				  <div className="ant-steps-main">
					  <div className="ant-steps-title">
						  {title}
              {editView
                ? <span>
                  <a style={{marginLeft: '3px'}}
                       className="edit-button"
                       onClick={onVIewChange}
                       href="#"><i className="anticon anticon-edit"></i></a>
                </span>
                : <span>
                  <a style={{marginLeft: '3px'}}
                       className="edit-button"
                       href="#"><i className="anticon anticon-check"></i></a>
                  <a style={{marginLeft: '3px'}}
                       className="edit-button"
                       href="#"><i className="anticon anticon-cross"></i></a>

                </span>
              }
            </div>


					  <div className="ant-steps-description">
              {description}
					  </div>
				  </div>
			  </div>
		  </div>
    );
  }
}
export default FormBuilderStep;

// function mapStateToProps(state) {
//   const { title, description, editView } = state.Contacts.toJS();
//   return {
//     title,
//     description,
//     editView
//   };
// }

// export default connect(mapStateToProps, {
//   viewChange
// })(FormBuilderStep);
