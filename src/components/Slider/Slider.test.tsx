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
