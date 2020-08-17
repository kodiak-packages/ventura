import React, { ComponentProps } from 'react';
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TextArea from './TextArea';

describe('TextArea', () => {
  const value = 'It was nice!';
  const defaultButtonProps: ComponentProps<typeof TextArea> = {
    name: 'comment',
  };

  test('default snapshot', () => {
    const component = <TextArea {...defaultButtonProps} />;
    const { asFragment } = render(component);
    expect(asFragment()).toMatchSnapshot();
  });

  test('value prop', () => {
    const component = <TextArea {...defaultButtonProps} value={value} onChange={() => {}} />;
    const { getByTestId } = render(component);
    const textAreaElement = getByTestId('textarea-comment');

    expect(textAreaElement.innerHTML).toBe(value);
  });

  test('onChange prop', async () => {
    const onChangeFn = jest.fn();
    const component = <TextArea {...defaultButtonProps} onChange={onChangeFn} />;
    const { getByTestId } = render(component);
    const textAreaElement = getByTestId('textarea-comment');

    await userEvent.type(textAreaElement, value);

    expect(onChangeFn).toHaveBeenCalledTimes(value.length);
  });

  test('onBlur prop', async () => {
    const onBlurFn = jest.fn();
    const component = <TextArea {...defaultButtonProps} onBlur={onBlurFn} />;
    const { getByTestId } = render(component);
    const textAreaElement = getByTestId('textarea-comment');

    fireEvent.blur(textAreaElement);

    expect(onBlurFn).toHaveBeenCalledTimes(1);
  });

  test('placeholder prop', () => {
    const component = <TextArea {...defaultButtonProps} placeholder="First name" />;
    const { getByTestId } = render(component);
    const textAreaElement = getByTestId('textarea-comment');

    expect(textAreaElement.getAttribute('placeholder')).toBe('First name');
  });

  test('errorMessage prop', () => {
    const component = <TextArea {...defaultButtonProps} isInvalid />;
    const { getByTestId } = render(component);
    const textAreaElement = getByTestId('textarea-comment');

    expect(textAreaElement.classList).toContain('containsError');
  });

  test('spellCheck prop', () => {
    const component = <TextArea {...defaultButtonProps} spellCheck />;
    const { getByTestId } = render(component);
    const textAreaElement = getByTestId('textarea-comment');

    expect(textAreaElement.hasAttribute('spellcheck')).toBe(true);
    expect(textAreaElement.getAttribute('spellcheck')).not.toBe(false);
  });

  test('autoComplete prop', () => {
    const component = <TextArea {...defaultButtonProps} autoComplete />;
    const { getByTestId } = render(component);
    const textAreaElement = getByTestId('textarea-comment');

    expect(textAreaElement.getAttribute('autocomplete')).toBe('on');
  });

  test('maxLength prop', () => {
    const maxLength = 3;
    const component = <TextArea {...defaultButtonProps} maxLength={3} />;
    const { getByTestId } = render(component);
    const textAreaElement = getByTestId('textarea-comment');

    expect(textAreaElement.getAttribute('maxlength')).toBe(maxLength.toString());
  });

  test('className prop', () => {
    const className = 'center';
    const component = <TextArea {...defaultButtonProps} className={className} />;
    const { getByTestId } = render(component);
    const containerElement = getByTestId('textarea-comment');

    const renderedClassNames = containerElement.className.split(' ');
    expect(renderedClassNames).toContain(className);
    // className in prop should be the last in the row
    expect(renderedClassNames.indexOf(className)).toBe(renderedClassNames.length - 1);
  });
});
