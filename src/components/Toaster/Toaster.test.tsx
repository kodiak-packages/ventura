import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';

import Button from '../Button/Button';
import toaster from './Toaster';

describe('Toaster', () => {
  test('snapshot of error toast', () => {
    const { baseElement, getByTestId } = render(
      <Button
        onClick={() => {
          toaster.error('Message');
        }}
        name="toaster"
      >
        Trigger toaster
      </Button>,
    );

    const button = getByTestId('button-toaster');
    fireEvent.click(button);

    expect(baseElement).toMatchSnapshot();
  });

  test('snapshot of success toast', () => {
    const { baseElement, getByTestId } = render(
      <Button
        onClick={() => {
          toaster.success('Message');
        }}
        name="toaster"
      >
        Trigger toaster
      </Button>,
    );

    const button = getByTestId('button-toaster');
    fireEvent.click(button);

    expect(baseElement).toMatchSnapshot();
  });

  test('toast has correct message', () => {
    const { getByTestId, getByText } = render(
      <Button
        onClick={() => {
          toaster.error('Something went wrong.');
        }}
        name="toaster"
      >
        Trigger toaster
      </Button>,
    );

    const button = getByTestId('button-toaster');
    fireEvent.click(button);

    const toasterElement = getByText(/Something went wrong./);

    expect(toasterElement).toBeInTheDocument();
  });

  test('toast onClose', async () => {
    const { getByTestId, getByText } = render(
      <Button
        onClick={() => {
          toaster.success('I hope this closes.');
        }}
        name="toaster"
      >
        Trigger toaster
      </Button>,
    );

    const button = getByTestId('button-toaster');
    fireEvent.click(button);

    const toasterElement = getByText(/I hope this closes./);

    const closeIcon = toasterElement.parentElement?.parentElement?.querySelector('.closeAlert');
    fireEvent.click(closeIcon!);

    await waitFor(() => expect(toasterElement).not.toBeInTheDocument());

    expect(toasterElement).not.toBeInTheDocument();
  });
});
