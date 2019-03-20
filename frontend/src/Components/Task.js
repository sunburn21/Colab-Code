import React, { Component } from 'react';
import Editor from './Editor';

class Task extends Component {
  state = {}
  render() {
    return (
      <div>
        <h1>This is new Task : {this.props.match.params.id}</h1>
        <Editor />
      </div>
    )
  }
}
export default Task;