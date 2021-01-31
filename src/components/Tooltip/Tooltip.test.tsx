import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';

import { Button } from '../../index';
import Tooltip from './Tooltip';

describe('Tooltip', () => {
  const component = (
    <Tooltip content="This is more info">
      <Button>Hover over me</Button>
    </Tooltip>
  );

  test('show on hover', async () => {
    const { queryByText, getByText } = render(component);
    const button = getByText('Hover over me');

    expect(queryByText('This is more info')).toBe(null);

    await waitFor(() => {
      fireEvent.mouseEnter(button);
    });

    expect(queryByText('This is more info')).not.toBe(null);
  });
});
