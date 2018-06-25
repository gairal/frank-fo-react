import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import createStore from '@/store/createStore';
import AbstractRoute from '@/routes/AbstractRoute';

describe('routes > AbstractRoute', () => {
  const store = createStore();
  const route = new AbstractRoute(store, 'test', 'test', 'test');

  route.component = () => (<div />);
  route.ACTIONS = {
    FETCH_SUCCESS: 'TEST_FETCH_SUCCESS',
    FETCH_FAILURE: 'TEST_FETCH_FAILURE',
  };
  route.init();

  AbstractRoute.success = jest.fn();
  AbstractRoute.fail = jest.fn();

  const connectedRoute = route.route;
  const Connected = connectedRoute.component;
  const component = renderer.create(<Provider store={store}><Connected /></Provider>);

  it('Has default props', () => {
    expect(route.key).toEqual('test');
    expect(route.icon).toEqual('test');
    expect(route.API_URL_BASE).toBeDefined();
    expect(route.API_URL).toBeDefined();
    expect(route.API_URL).toEqual(`${route.API_URL_BASE}/test/test`);
    expect(route.mapDispatchToProps.load).toBeDefined();
    expect(route.ACTION_HANDLERS.TEST_FETCH_SUCCESS).toEqual(AbstractRoute.fetchSuccess);
    expect(route.ACTION_HANDLERS.TEST_FETCH_FAILURE).toEqual(AbstractRoute.fetchFail);
  });

  it('Renders correctly', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Has a route', () => {
    expect(connectedRoute).toBeDefined();
    expect(connectedRoute.key).toEqual('test');
    expect(connectedRoute.icon).toEqual('test');
    expect(connectedRoute.path).toEqual('/test');
  });

  it('Can load', () => {
    const dumbComponent = component.root.findByType(route.component);
    dumbComponent.props.load();
  });
});
