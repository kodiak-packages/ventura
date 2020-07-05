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

  test('className prop', () => {
    const className = 'center';
    const component = (
      <Button className={className} name="class">
        Hey
      </Button>
    );
    const { getByTestId } = render(component);
    const buttonElement = getByTestId('button-class');

    const renderedClassNames = buttonElement.className.split(' ');
    expect(renderedClassNames).toContain(className);
    // className in prop should be the last in the row
    expect(renderedClassNames.indexOf(className)).toBe(renderedClassNames.length - 1);
  });

  test('onClick should be triggered when clicked', () => {
    const onClickFn = jest.fn();
    const component = (
      <Button onClick={onClickFn} name="click">
        Click me
      </Button>
    );
    const { getByTestId } = render(component);

    const button = getByTestId('button-click');
    fireEvent.click(button);

    expect(onClickFn).toHaveBeenCalledTimes(1);
  });

  test('disabled button', () => {
    const onClickFn = jest.fn();
    const component = (
      <Button isDisabled name="disabled">
        Click me
      </Button>
    );
    const { getByTestId } = render(component);
    const button = getByTestId('button-disabled');

    expect(button.hasAttribute('disabled')).toBe(true);
    expect(button.getAttribute('disabled')).not.toBe(false);

    fireEvent.click(button);
    expect(onClickFn).toHaveBeenCalledTimes(0);
  });

  test('loading button', () => {
    const onClickFn = jest.fn();
    const component = (
      <Button isLoading name="loading">
        Click me
      </Button>
    );
    const { asFragment, getByTestId } = render(component);

    expect(asFragment()).toMatchSnapshot();

    const button = getByTestId('button-loading');

    expect(button.hasAttribute('disabled')).toBe(true);
    expect(button.getAttribute('disabled')).not.toBe(false);

    fireEvent.click(button);
    expect(onClickFn).toHaveBeenCalledTimes(0);
  });

  test('button should have type="submit"', () => {
    const component = (
      <Button isSubmit name="submit">
        Click me
      </Button>
    );
    const { asFragment, getByTestId } = render(component);

    expect(asFragment()).toMatchSnapshot();

    const button = getByTestId('button-submit');

    expect(button.hasAttribute('type')).toBe(true);
    expect(button.getAttribute('type')).toBe('submit');
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
});
