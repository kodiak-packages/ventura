import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { GitHub } from '../../index';
import Menu from './Menu';

describe('TextArea', () => {
  test('default snapshot', () => {
    const component = (
      <Menu>
        <Menu.Item>Option 1</Menu.Item>
        <Menu.Item prefixIcon={<GitHub />}>Option 2</Menu.Item>
      </Menu>
    );
    const { asFragment } = render(component);
    expect(asFragment()).toMatchSnapshot();
  });

  test('onClick should be triggered when clicked', () => {
    const onClickFn = jest.fn();
    const component = (
      <Menu>
        <Menu.Item name="click" onClick={onClickFn}>
          Option 1
        </Menu.Item>
        <Menu.Item prefixIcon={<GitHub />}>Option 2</Menu.Item>
      </Menu>
    );
    const { getByTestId } = render(component);

    const menuItem = getByTestId('menu-item-click');
    fireEvent.click(menuItem);

    expect(onClickFn).toHaveBeenCalledTimes(1);
  });
});
