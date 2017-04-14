import CoreLayout from '../layouts/CoreLayout';
import Home from './Home';
import TodoRoute from './Todo';

export const createRoutes = store => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: [
    TodoRoute(store),
  ],
});

export default createRoutes;
