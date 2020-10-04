import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';

import { Button, GitHub, Menu } from '../../index';
import Popover from './Popover';

describe('Popover', () => {
  test('default snapshot', async () => {
    const content = (
      <Menu>
        <Menu.Item name="default">Option 1</Menu.Item>
        <Menu.Item prefixIcon={<GitHub />}>Option 2</Menu.Item>
      </Menu>
    );

    const component = (
      <Popover isVisible onClose={() => {}} content={content}>
        <Button>Click me!</Button>
      </Popover>
    );
    const { asFragment, getByTestId } = render(component);

    await waitFor(() => getByTestId('menu-item-default'));
    expect(asFragment()).toMatchSnapshot();
  });

  test('click outside should trigger onClose', async () => {
    const onCloseFn = jest.fn();
    const content = (
      <Menu>
        <Menu.Item name="default">Option 1</Menu.Item>
        <Menu.Item prefixIcon={<GitHub />}>Option 2</Menu.Item>
      </Menu>
    );

    const component = (
      <>
        <Popover isVisible onClose={onCloseFn} content={content}>
          <Button>Click me!</Button>
        </Popover>
        <Button name="click">Random button!</Button>
      </>
    );
    const { getByTestId } = render(component);

    await waitFor(() => getByTestId('menu-item-default'));

    const outsideButton = getByTestId('button-click');
    fireEvent.click(outsideButton);

    expect(onCloseFn).toHaveBeenCalledTimes(1);
  });
});
