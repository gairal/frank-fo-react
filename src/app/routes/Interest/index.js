import { injectReducer } from '../../store/reducers';

export default store => ({
  path: 'interest',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const Interest = require('./InterestContainer').default;
      const reducer = require('./Interest').default;

      /*  Add the reducer to the store on key 'calc'  */
      injectReducer(store, { key: 'interest', reducer });

      /*  Return getComponent   */
      cb(null, Interest);

      /* Webpack named bundle   */
    }, 'interest');
  },
});
