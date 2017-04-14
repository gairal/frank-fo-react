import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

let title;
let desc;
export const Todo = props => (
  // <Grid>
  //   <form
  //     className="row"
  //     onSubmit={(e) => {
  //       e.preventDefault();
  //       if (!title.value.trim() || !desc.value.trim()) {
  //         return;
  //       }
  //       props.add(title.value, desc.value);
  //       title.value = '';
  //       desc.value = '';
  //     }}
  //   >
  //     <FormGroup className="col-xs-12">
  //       <ControlLabel>Title</ControlLabel>
  //       <FormControl type="text" name="title" placeholder="title" inputRef={(ref) => { title = ref; }} />
  //     </FormGroup>
  //     <FormGroup className="col-xs-12">
  //       <ControlLabel>Description</ControlLabel>
  //       <FormControl componentClass="textarea" name="description" placeholder="description" inputRef={(ref) => { desc = ref; }} />
  //     </FormGroup>
  //     <Button bsSize="large" type="submit"><span className="glyphicon glyphicon-plus" aria-hidden="true" /> Add</Button>
  //   </form>
  //   <ul>
  //     {props.todos.map(todo =>
  //       <TodoItem
  //         key={todo.id}
  //         title={todo.title}
  //         desc={todo.desc}
  //         remove={() => props.remove(todo.id)}
  //       />,
  //     )}
  //   </ul>
  // </Grid>
  <div />
);

Todo.propTypes = {
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    // id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
  }).isRequired).isRequired,
};

export default Todo;
