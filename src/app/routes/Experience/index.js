import { injectReducer } from '../../store/reducers';

export default store => ({
  path: 'experience',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const Experience = require('./ExperienceContainer').default;
      const reducer = require('./Experience').default;

      /*  Add the reducer to the store on key 'calc'  */
      injectReducer(store, { key: 'experience', reducer });

      /*  Return getComponent   */
      cb(null, Experience);

      /* Webpack named bundle   */
    }, 'experience');
  },
});
