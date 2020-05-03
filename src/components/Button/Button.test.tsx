import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { GitHub } from '../../index';
import Button from './Button';

describe('Button', () => {
  test('default snapshot', () => {
    const component = <Button>Click me</Button>;
    const { asFragment } = render(component);
    expect(asFragment()).toMatchSnapshot();
  });

  test('secondary button', () => {
    const component = <Button type="secondary">Click me</Button>;
    const { asFragment } = render(component);
    expect(asFragment()).toMatchSnapshot();
  });

  test('disabled button', () => {
    const component = (
      <Button isDisabled name="disabled">
        Click me
      </Button>
    );
    const { getByTestId } = render(component);
    const inputElement = getByTestId('button-disabled');

    expect(inputElement.hasAttribute('disabled')).toBe(true);
    expect(inputElement.getAttribute('disabled')).not.toBe(false);
  });

  test('loading button', () => {
    const component = <Button isLoading>Click me</Button>;
    const { asFragment } = render(component);
    expect(asFragment()).toMatchSnapshot();
  });

  test('prefix icon button', () => {
    const component = <Button prefixIcon={<GitHub />}>Click me</Button>;
    const { asFragment } = render(component);
    expect(asFragment()).toMatchSnapshot();
  });

  test('suffix icon button', () => {
    const component = <Button suffixIcon={<GitHub />}>Click me</Button>;
    const { asFragment } = render(component);
    expect(asFragment()).toMatchSnapshot();
  });

  test('onClick should be triggered when clicked', async () => {
    const onClickFn = jest.fn();
    const component = (
      <Button onClick={onClickFn} name="click">
        Click me
      </Button>
    );
    const { findByTestId } = render(component);

    const button = await findByTestId('button-click');
    fireEvent.click(button);

    expect(onClickFn).toHaveBeenCalledTimes(1);
  });
});
