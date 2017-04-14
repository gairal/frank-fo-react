import { connect } from 'react-redux';
import { add, remove } from '../Skill';

import Experience from '../../components/Skill';

const mapDispatchToProps = {
  add,
  remove,
};

const mapStateToProps = state => ({
  todos: state.todo,
});

export default connect(mapStateToProps, mapDispatchToProps)(Experience);
