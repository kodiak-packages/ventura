import React, { ComponentProps } from 'react';
import { render } from '@testing-library/react';

import Select from './Select';

describe('Select', () => {
  const defaultSelectProps: ComponentProps<typeof Select> = {
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ],
  };

  test('default snapshot', () => {
    const component = <Select {...defaultSelectProps} />;
    const { asFragment } = render(component);
    expect(asFragment()).toMatchSnapshot();
  });

  test('select with default value', () => {
    const component = (
      <Select {...defaultSelectProps} defaultValue={defaultSelectProps.options[0]} />
    );
    const { asFragment } = render(component);
    expect(asFragment()).toMatchSnapshot();
  });
});
