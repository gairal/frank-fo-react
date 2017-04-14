import { connect } from 'react-redux';
import { add, remove } from '../Interest';

import Experience from '../../components/Interest';

const mapDispatchToProps = {
  add,
  remove,
};

const mapStateToProps = state => ({
  todos: state.todo,
});

export default connect(mapStateToProps, mapDispatchToProps)(Experience);
