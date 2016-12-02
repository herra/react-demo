import React, { Component } from 'react';
import './TaskInput.css';

class TaskInput extends Component {
  constructor(props) {
    super(props);
    this.state = { task: props.task || {title: ''} };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ task: { title: event.target.value } });
  }  

  buttonClick = e => {
    if (e.target.tagName !== 'INPUT' &&
        e.target.tagName !== 'SELECT' &&
        e.target.tagName !== 'TEXTAREA') {
            
      if (this.props.onButtonClick) this.props.onButtonClick(this.state);
    }
  }

  render() {
    return (      
      <form className="form form-inline TaskInputContainer">
        <div className="form-group">    
            <label htmlFor="taskInput" className="TaskInputLabel" >Title your task:</label>
            <input id="taskInput" type="text" className="form-control TaskInput" value={this.state.task.title} onChange={this.handleChange} />
            <button id="taskAdd" className="button btn btn-success TaskInputBtn" type="button" onClick={ this.buttonClick } >Add Task</button>
        </div>      
	  </form>
    );
  }
}

export default TaskInput;
