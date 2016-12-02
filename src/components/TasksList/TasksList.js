import React, { Component } from 'react';
import './TasksList.css';

class TasksList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  };

  render() {
    const tableData = this.state.data ? this.state.data.map(function (row, index) {
      const result = [];
      result.push(
        <tr>
          <td>{row.title}</td>
          <td>{row.content}</td>
          <td>{row.deadline}</td>
        </tr>
      );

      return (result);
    }, this) : <tr><td>No data!</td></tr>;

    return (
      <div className="container">
        <table className="table table-striped">
          <caption>List of tasks</caption>
          <thead>
            <tr>
              <th>Title</th>
              <th>Content</th>
              <th>Deadline</th>
            </tr>
          </thead>
          <tbody>
            {tableData}
          </tbody>
        </table>
      </div>
    );
  };

}

export default TasksList;
