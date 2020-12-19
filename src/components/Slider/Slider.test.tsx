import * as React from 'react';
import { render } from '@testing-library/react';

import Slider from './Slider';

describe('Slider', () => {
  const defaultProps: React.ComponentProps<typeof Slider> = {
    onChange: jest.fn(),
    value: 50,
    valueBoundaries: [0, 100],
  };

  test('default snapshot', () => {
    const { asFragment } = render(<Slider {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('the displayed decimals should be the same as the value boundaries', () => {
    const { queryByText } = render(<Slider {...defaultProps} valueBoundaries={[10, 10.05]} />);
    expect(queryByText('10.00')).not.toBe(null);
    expect(queryByText('10.05')).not.toBe(null);
  });

  test('3 decimals should be displayed', () => {
    const { queryByText } = render(<Slider {...defaultProps} numberOfDecimals={3} />);
    expect(queryByText('100.000')).not.toBe(null);
  });

  test('text boundaries should be displayed', () => {
    const { queryByText } = render(<Slider {...defaultProps} textBoundaries={['left', 'right']} />);
    expect(queryByText('left')).not.toBe(null);
    expect(queryByText('right')).not.toBe(null);
  });
});
