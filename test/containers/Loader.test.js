import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import createStore from '@/store/createStore';
import LoaderComponent from '@/components/core/Loader';
import LoaderContainer, { showLoader, hideLoader } from '@/containers/Loader';

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

  it('Can change state', () => {
    store.dispatch(showLoader());
    expect(dumbComponent.props.isFetching).toBeTruthy();
    store.dispatch(hideLoader());
    expect(dumbComponent.props.isFetching).toBeFalsy();
  });
});
