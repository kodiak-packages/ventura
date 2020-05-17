import React, { ComponentProps } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input from './Input';

describe('Input', () => {
  const defaultButtonProps: ComponentProps<typeof Input> = {
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
    const component = <Input {...defaultButtonProps} className={className} />;
    const { getByTestId } = render(component);
    const containerElement = getByTestId('container');

    const renderedClassNames = containerElement.className.split(' ');
    expect(renderedClassNames).toContain(className);
    // className in prop should be the last in the row
    expect(renderedClassNames.indexOf(className)).toBe(renderedClassNames.length - 1);
  });
});
