import React, { Component } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/neat.css');
require('codemirror/mode/javascript/javascript.js');

class Editor extends Component {
  state = {
    value: ""
  }
  render() {

    return (
      <div>
        <Row>
          <Col md={{ span: 8 }} >
            <CodeMirror
              value={this.state.value}
              options={{
                mode: 'javascript',
                theme: 'material',
                lineNumbers: true
              }}
              onBeforeChange={(editor, data, value) => {
                this.setState({ value });
              }}
              onChange={(editor, value) => {
              }}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Editor;