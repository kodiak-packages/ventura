import React from 'react';
import { render } from '@testing-library/react';

import Alert from './Alert';

describe('Input', () => {
  const defaultProps = {
    message: 'Something went wrong.',
  };

  test('default snapshot', () => {
    const { asFragment } = render(<Alert {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('the message should be rendered', () => {
    const { queryByText } = render(<Alert {...defaultProps} />);
    const alertElement = queryByText(/Something went wrong./);
    expect(alertElement).not.toBe(null);
  });

  test('className prop', () => {
    const className = 'center';
    const { getByText } = render(<Alert {...defaultProps} className={className} />);
    const alertElement = getByText(/Something went wrong./).parentElement?.parentElement!;

    const renderedClassNames = alertElement.className.split(' ');
    expect(renderedClassNames).toContain(className);
    // className in prop should be the last in the row
    expect(renderedClassNames.indexOf(className)).toBe(renderedClassNames.length - 1);
  });
});
