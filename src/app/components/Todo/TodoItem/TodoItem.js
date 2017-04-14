import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
// import './TodoItem.scss';

export const TodoItem = props =>
  (
    <li className="todo-item">
      <p><strong>{props.title}</strong></p>
      <p>{props.desc}</p>
      <RaisedButton label="Remove" onClick={props.remove} />
    </li>
  );

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  remove: PropTypes.func.isRequired,
};

export default TodoItem;
