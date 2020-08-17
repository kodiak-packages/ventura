import React, { ComponentProps } from 'react';
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input from './TextArea';

describe('TextArea', () => {
  const value = 'It was nice!';
  const defaultButtonProps: ComponentProps<typeof Input> = {
    name: 'comment',
  };

  test('default snapshot', () => {
    const component = <Input {...defaultButtonProps} />;
    const { asFragment } = render(component);
    expect(asFragment()).toMatchSnapshot();
  });

  test('value prop', () => {
    const component = <Input {...defaultButtonProps} value={value} onChange={() => {}} />;
    const { getByTestId } = render(component);
    const inputElement = getByTestId('textarea-comment');

    expect(inputElement.innerHTML).toBe(value);
  });

  test('onChange prop', async () => {
    const onChangeFn = jest.fn();
    const component = <Input {...defaultButtonProps} onChange={onChangeFn} />;
    const { getByTestId } = render(component);
    const inputElement = getByTestId('textarea-comment');

    await userEvent.type(inputElement, value);

    expect(onChangeFn).toHaveBeenCalledTimes(value.length);
    expect((inputElement as any).value).toBe(value);
  });

  test('onBlur prop', async () => {
    const onBlurFn = jest.fn();
    const component = <Input {...defaultButtonProps} onBlur={onBlurFn} />;
    const { getByTestId } = render(component);
    const inputElement = getByTestId('textarea-comment');

    fireEvent.blur(inputElement);

    expect(onBlurFn).toHaveBeenCalledTimes(1);
  });

  test('placeholder prop', () => {
    const component = <Input {...defaultButtonProps} placeholder="First name" />;
    const { getByTestId } = render(component);
    const inputElement = getByTestId('textarea-comment');

    expect(inputElement.getAttribute('placeholder')).toBe('First name');
  });

  test('errorMessage prop', () => {
    const component = <Input {...defaultButtonProps} isInvalid />;
    const { getByTestId } = render(component);
    const inputElement = getByTestId('textarea-comment');

    expect(inputElement.classList).toContain('containsError');
  });

  test('spellCheck prop', () => {
    const component = <Input {...defaultButtonProps} spellCheck />;
    const { getByTestId } = render(component);
    const inputElement = getByTestId('textarea-comment');

    expect(inputElement.hasAttribute('spellcheck')).toBe(true);
    expect(inputElement.getAttribute('spellcheck')).not.toBe(false);
  });

  test('autoComplete prop', () => {
    const component = <Input {...defaultButtonProps} autoComplete />;
    const { getByTestId } = render(component);
    const inputElement = getByTestId('textarea-comment');

    expect(inputElement.getAttribute('autocomplete')).toBe('on');
  });

  test('maxLength prop', () => {
    const maxLength = 3;
    const component = <Input {...defaultButtonProps} maxLength={3} />;
    const { getByTestId } = render(component);
    const inputElement = getByTestId('textarea-comment');

    expect(inputElement.getAttribute('maxlength')).toBe(maxLength.toString());
  });

  test('className prop', () => {
    const className = 'center';
    const component = <Input {...defaultButtonProps} className={className} />;
    const { getByTestId } = render(component);
    const containerElement = getByTestId('textarea-comment');

    const renderedClassNames = containerElement.className.split(' ');
    expect(renderedClassNames).toContain(className);
    // className in prop should be the last in the row
    expect(renderedClassNames.indexOf(className)).toBe(renderedClassNames.length - 1);
  });
});
