import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, Steps, Icon, Button, Tabs, Popover } from 'antd';
import Box from '../../components/utility/box';
import LayoutWrapper from '../../components/utility/layoutWrapper';
import { InputSearch } from '../../components/uielements/input';
import notification from '../../components/notification';
import YoutubeResult from '../../components/youtubeSearch/result';
import basicStyle from '../../config/basicStyle';
import actions from '../../redux/youtubeSearch/actions';
import Modals from '../../components/feedback/modal';
import ModalStyle, { ModalContent } from './modal.style';
import FormBuilderComponents from '../../components/formBuilder/formBuilderComponents';
import FormBuilderSteps from '../../components/formBuilder/formBuilderSteps';
const { youtubeSearch, onPageChange } = actions;
const Step = Steps.Step;
const TabPane = Tabs.TabPane;
const operations = <Button>Add Section</Button>;
const customDot = (dot, { status, index }) => (
  <Popover content={<span>step {index} status: {status}</span>}>
  {dot}
  </Popover>
);

const { rowStyle, colStyle, gutter } = basicStyle;


class FormBuilder extends Component {

  onSearch = value => {
    if (value && value.length > 0) {
      this.props.youtubeSearch(value);
    } else {
      notification('error', 'Please type something');
    }
  };

  render() {
    return (
      <LayoutWrapper>

        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={24} sm={24} xs={24} style={colStyle}>
            <Box>
              <Steps size="small" current={2}>
                <Step title="Name" />
                <Step title="Duplicate" />
                <Step title="Build"/>
                <Step title="Setup"/>
                <Step title="Theme"/>
                <Step title="Finish/Test"/>
              </Steps>
            </Box>
          </Col>
        </Row>

        <Row style={rowStyle} gutter={gutter} justify="start">
          {/* <Col md={6} sm={24} xs={24} style={colStyle}>
              <Row style={rowStyle} gutter={12} justify="start">
              {formComponents.map((x, i) =>
              <Col md={12} sm={24} xs={24} style={colStyle}>
              <Card bordered={false}>
              {x.name}
              </Card>
              </Col>
              )}
              </Row>
              </Col>
            */}
          <Col  md={6}  style={colStyle}>
           <FormBuilderSteps />
          </Col>
          <Col  md={18}  style={colStyle}>
            <Col  md={24}  style={colStyle}>

              <div style={{ padding: gutter }}>
                <Card title="Card title Card title Card title Card title Card title Card title Card title Card title Card title Card title " extra={<Button type="dashed" onClick={editModule} >Edit</Button>}>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
                <div style={{textAlign: 'center', padding: '20px'}}>
                  <Button  onClick={addModule} type="dashed"> + </Button>
                </div>
              </div>
              <div style={{ padding: gutter }}>
                <Card title="Card title" extra={<Button type="dashed">Edit</Button>}>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
                <div style={{textAlign: 'center', padding: '20px'}}>
                  <Button type="dashed"> + </Button>
                </div>
              </div>


            </Col>
          </Col>
        </Row>

        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={24} sm={24} xs={24} style={colStyle}>
            <Box>
              <div className="steps-action">
                <Button style={{ marginLeft: 8 }}>
                  Previous
                </Button>
                <Button type="primary" onClick={() => this.next()}>Next</Button>
              </div>
            </Box>
          </Col>
        </Row>


      </LayoutWrapper>
    );
  }
}



function addModule() {
  Modals.success({
    title: 'Select Module',
    width: "75%",
    content: (
      <ModalContent>
      <FormBuilderComponents />
      </ModalContent>
    ),
    onOk() {},
    okText: 'Next',
    cancelText: 'Close',
  });
};

function editModule() {
  Modals.success({
    title: 'Edit Module',
    content:
                 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    okText: 'Save',
    cancelText: 'Close',
  });
};




function mapStateToProps(state) {
  return { YoutubeSearch: state.YoutubeSearch.toJS() };
}
export default connect(mapStateToProps, { youtubeSearch, onPageChange })(
  FormBuilder
);
