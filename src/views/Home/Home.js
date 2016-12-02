import React, { Component } from 'react';
import './Home.css';
import TaskInput from '../../components/TaskInput/TaskInput';
import TasksList from '../../components/TasksList/TasksList';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [{ title: 'test', content: 'some beatiful content', deadline: (new Date()).toLocaleString() },
      { title: 'test2', content: 'some ugly content', deadline: (new Date()).toLocaleString() }],
      newTask: { title: '' }
    };
  }
  
    

  onButtonClick = e => {
    console.log(e);         
    
    this.state.tasks.push(e.task);
    this.setState(this.state);
    e.task = {title: ''};
  };

  render() {    
    return (
      <div>
        <div className="container HomeTaskInputContainer">       
          <TaskInput onButtonClick={this.onButtonClick} task={this.state.newTask} />
        </div>
        
        <div className="HomeTasksListContainer">
          <TasksList data={this.state.tasks} />
        </div>        
      </div>  
    );
  }
}

export default Home;
