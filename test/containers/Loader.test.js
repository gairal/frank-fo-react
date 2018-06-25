import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import createStore from '@/store/createStore';
import LoaderComponent from '@/components/core/Loader';
import LoaderContainer from '@/containers/Loader';

describe('LoaderContainer', () => {
  const store = createStore();
  let component;
  let dumbComponent;
  beforeEach(() => {
    const Container = LoaderContainer(store);
    component = renderer.create(<Provider store={store}><Container /></Provider>);
    dumbComponent = component.root.findByType(LoaderComponent);
  });

  it('Contains default props', () => {
    expect(dumbComponent.props.isFetching).toEqual(false);
  });

  it('Renders correctly', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it.skip('Can change state', () => {
    dumbComponent.props.actions.showLoader();
    // store.dispatch(() => ({ type: ' LOADER_SHOW' }));
    // expect(dumbComponent.props.isFetching).toBeTruthy();
    // store.dispatch(() => ({ type: ' LOADER_HIDE' }));
    // expect(dumbComponent.props.isFetching).toBeFalsy();
  });
});
