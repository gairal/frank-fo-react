import { connect } from 'react-redux';
import { add, remove } from '../Education';

import Experience from '../../components/Experience';

const mapDispatchToProps = {
  add,
  remove,
};

const mapStateToProps = state => ({
  todos: state.todo,
});

export default connect(mapStateToProps, mapDispatchToProps)(Experience);
