import React from 'react';
import ReactDOM from 'react-dom';
import TaskInput from './TaskInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TaskInput />, div);
});
