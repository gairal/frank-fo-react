import { connect } from 'react-redux';
import { add, remove } from '../modules/todo';

import Todo from '../../../components/Todo';

const mapDispatchToProps = {
  add,
  remove,
};

const mapStateToProps = state => ({
  todos: state.todo,
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
