import React, { ComponentProps } from 'react';
import { fireEvent, render } from '@testing-library/react';

import Checkbox from './Checkbox';

describe('Checkbox', () => {
  const defaultProps: ComponentProps<typeof Checkbox> = {
    name: 'enabled',
    label: 'Enable me',
  };

  test('default snapshot', () => {
    const component = <Checkbox {...defaultProps} />;
    const { asFragment } = render(component);
    expect(asFragment()).toMatchSnapshot();
  });

  test('default checked snapshot', () => {
    const component = <Checkbox {...defaultProps} value />;
    const { getByTestId, asFragment } = render(component);

    const checkboxElement = getByTestId('checkbox-enabled');
    expect(checkboxElement.getAttribute('checked')).toBe('');

    expect(asFragment()).toMatchSnapshot();
  });

  test('isDisabled prop', () => {
    const onChangeFn = jest.fn();
    const component = <Checkbox {...defaultProps} isDisabled onChange={onChangeFn} />;
    const { asFragment, getByTestId } = render(component);

    const checkboxLabel = getByTestId('checkbox-label-enabled');
    fireEvent.click(checkboxLabel);

    expect(onChangeFn).toHaveBeenCalledTimes(0);
    expect(asFragment()).toMatchSnapshot();
  });

  test('onChange prop', () => {
    const onChangeFn = jest.fn();
    const component = <Checkbox {...defaultProps} onChange={onChangeFn} />;
    const { getByTestId } = render(component);

    const checkboxLabel = getByTestId('checkbox-label-enabled');
    fireEvent.click(checkboxLabel);

    expect(onChangeFn).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({
        target: expect.objectContaining({
          checked: true,
        }),
      }),
    );
  });

  test('className prop', () => {
    const className = 'center';
    const component = <Checkbox {...defaultProps} className={className} />;
    const { getByTestId } = render(component);
    const checkboxLabel = getByTestId('checkbox-label-enabled');

    const renderedClassNames = checkboxLabel.className.split(' ');
    expect(renderedClassNames).toContain(className);
    // className in prop should be the last in the row
    expect(renderedClassNames.indexOf(className)).toBe(renderedClassNames.length - 1);
  });

  test('value prop updates internal state', () => {
    const { getByTestId, rerender } = render(<Checkbox {...defaultProps} value={false} />);
    const checkbox = getByTestId('checkbox-enabled') as HTMLInputElement;

    // Initial state should be unchecked
    expect(checkbox.checked).toBe(false);

    // Update value prop to true
    rerender(<Checkbox {...defaultProps} value />);
    expect(checkbox.checked).toBe(true);

    // Update value prop back to false
    rerender(<Checkbox {...defaultProps} value={false} />);
    expect(checkbox.checked).toBe(false);
  });
});
