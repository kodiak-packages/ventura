import React, { ComponentProps } from 'react';
import { fireEvent, render } from '@testing-library/react';

import { Button } from '../../index';

describe('Button', () => {
  const onClickFn = jest.fn();
  const defaultButtonProps: ComponentProps<typeof Button> = {
    type: 'primary',
    children: 'Click me',
    onClick: onClickFn,
  };

  test('default snapshot', () => {
    const component = <Button {...defaultButtonProps} />;
    const { asFragment } = render(component);
    expect(asFragment()).toMatchSnapshot();
  });

  test('secondary button', () => {
    const component = <Button {...defaultButtonProps} type="secondary" />;
    const { asFragment } = render(component);
    expect(asFragment()).toMatchSnapshot();
  });

  test('onClick should be triggered when clicked', async () => {
    const component = <Button {...defaultButtonProps} name="test" />;
    const { findByTestId } = render(component);

    const button = await findByTestId('test');
    fireEvent.click(button);

    expect(onClickFn).toHaveBeenCalledTimes(1);
  });
});
