import React, { ComponentProps } from 'react';
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Checkbox from './Checkbox';

describe('Checkbox', () => {
  const defaultButtonProps: ComponentProps<typeof Checkbox> = {
    name: 'firstname',
  };

  test('default snapshot', () => {
    const component = <Input {...defaultButtonProps} />;
    const { asFragment } = render(component);
    expect(asFragment()).toMatchSnapshot();
  });

  test('value prop', () => {
    const component = <Input {...defaultButtonProps} value="Robin" onChange={() => {}} />;
    const { getByTestId } = render(component);
    const inputElement = getByTestId('input-firstname');

    expect(inputElement.getAttribute('value')).toBe('Robin');
  });

  test('isDisabled prop', async () => {
    const onChangeFn = jest.fn();
    const firstName = 'Bram';
    const component = <Input {...defaultButtonProps} isDisabled onChange={onChangeFn} />;
    const { asFragment, getByTestId } = render(component);
    const inputElement = getByTestId('input-firstname');

    expect(asFragment()).toMatchSnapshot();

    await userEvent.type(inputElement, firstName);
    expect(onChangeFn).toHaveBeenCalledTimes(0);
  });

  test('onChange prop', async () => {
    const onChangeFn = jest.fn();
    const firstName = 'Robin';
    const component = <Input {...defaultButtonProps} onChange={onChangeFn} />;
    const { getByTestId } = render(component);
    const inputElement = getByTestId('input-firstname');

    await userEvent.type(inputElement, firstName);

    expect(onChangeFn).toHaveBeenCalledTimes(firstName.length);
    expect((inputElement as any).value).toBe(firstName);
  });

  test('onBlur prop', async () => {
    const onBlurFn = jest.fn();
    const component = <Input {...defaultButtonProps} onBlur={onBlurFn} />;
    const { getByTestId } = render(component);
    const inputElement = getByTestId('input-firstname');

    fireEvent.blur(inputElement);

    expect(onBlurFn).toHaveBeenCalledTimes(1);
  });

  test('placeholder prop', () => {
    const component = <Input {...defaultButtonProps} placeholder="First name" />;
    const { getByTestId } = render(component);
    const inputElement = getByTestId('input-firstname');

    expect(inputElement.getAttribute('placeholder')).toBe('First name');
  });

  test('type prop', () => {
    const component = <Input {...defaultButtonProps} type="password" />;
    const { getByTestId } = render(component);
    const inputElement = getByTestId('input-firstname');

    expect(inputElement.getAttribute('type')).toBe('password');
  });

  test('errorMessage prop', () => {
    const component = <Input {...defaultButtonProps} isInvalid />;
    const { getByTestId } = render(component);
    const inputElement = getByTestId('input-firstname');

    expect(inputElement.classList).toContain('containsError');
  });

  test('spellCheck prop', () => {
    const component = <Input {...defaultButtonProps} spellCheck />;
    const { getByTestId } = render(component);
    const inputElement = getByTestId('input-firstname');

    expect(inputElement.hasAttribute('spellcheck')).toBe(true);
    expect(inputElement.getAttribute('spellcheck')).not.toBe(false);
  });

  test('autoComplete prop', () => {
    const component = <Input {...defaultButtonProps} autoComplete />;
    const { getByTestId } = render(component);
    const inputElement = getByTestId('input-firstname');

    expect(inputElement.getAttribute('autocomplete')).toBe('on');
  });

  test('maxLength prop', () => {
    const maxLength = 3;
    const component = <Input {...defaultButtonProps} maxLength={3} />;
    const { getByTestId } = render(component);
    const inputElement = getByTestId('input-firstname');

    expect(inputElement.getAttribute('maxlength')).toBe(maxLength.toString());
  });

  test('className prop', () => {
    const className = 'center';
    const component = <Input {...defaultButtonProps} name="classname" className={className} />;
    const { getByTestId } = render(component);
    const containerElement = getByTestId('input-classname');

    const renderedClassNames = containerElement.className.split(' ');
    expect(renderedClassNames).toContain(className);
    // className in prop should be the last in the row
    expect(renderedClassNames.indexOf(className)).toBe(renderedClassNames.length - 1);
  });
});
