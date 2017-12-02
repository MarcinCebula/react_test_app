import React, { Component } from 'react';
import basicStyle from '../../config/basicStyle';
import { Row, Steps, Button} from 'antd';
import Box from '../../components/utility/box';

import FormBuilderStep from './formBuilderStep';

const Step = Steps.Step;
const { rowStyle, colStyle, gutter } = basicStyle;

const formSteps = []

class FormBuilderSteps extends Component {
  render() {
    return (
      <Box>
        <div className="ant-steps ant-steps-vertical">

          {formSteps.map((x, i) =>
                         <FormBuilderStep {...x}/>
                        )} />
        </div>

        <div style={{textAlign: 'center', padding: '20px'}}>
        <Button onClick={addSection} type="dashed"> + </Button>
        </div>

        </Box>

    )
  }
}

function addSection() {
  alert('add section')
}

export default FormBuilderSteps;
