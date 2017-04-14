import { injectReducer } from '../../store/reducers';

export default store => ({
  path: 'education',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const Education = require('./EducationContainer').default;
      const reducer = require('./Education').default;

      /*  Add the reducer to the store on key 'calc'  */
      injectReducer(store, { key: 'education', reducer });

      /*  Return getComponent   */
      cb(null, Education);

      /* Webpack named bundle   */
    }, 'education');
  },
});
