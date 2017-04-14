import { injectReducer } from '../../store/reducers';

export default store => ({
  path: 'skill',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const Skill = require('./SkillContainer').default;
      const reducer = require('./Skill').default;

      /*  Add the reducer to the store on key 'calc'  */
      injectReducer(store, { key: 'skill', reducer });

      /*  Return getComponent   */
      cb(null, Skill);

      /* Webpack named bundle   */
    }, 'skill');
  },
});
