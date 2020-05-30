import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Modal from './Modal';

describe('Modal', () => {
  const isModalVisible = (container: HTMLElement) => container.hasChildNodes();

  test('snapshot when shown', () => {
    const { asFragment, container } = render(
      <Modal.Dialog title="This is the title" isOpen>
        <span>Insert your text or form elements here</span>
        <Modal.Footer>Buttons are placed here</Modal.Footer>
      </Modal.Dialog>,
      { container: document.body },
    );
    expect(asFragment()).toMatchSnapshot();
    expect(isModalVisible(container)).toBe(true);
  });

  test('snapshot when hidden', () => {
    const { asFragment, container } = render(<Modal.Dialog>Invisible</Modal.Dialog>, {
      container: document.body,
    });
    expect(asFragment()).toMatchSnapshot();
    expect(isModalVisible(container)).toBe(false);
  });

  test('className prop', () => {
    const className = 'center';
    const { getByText } = render(
      <Modal.Dialog isOpen className={className}>
        Content
      </Modal.Dialog>,
      { container: document.body },
    );
    const overlayElement = getByText(/Content/).parentElement!;

    const renderedClassNames = overlayElement.className.split(' ');
    expect(renderedClassNames).toContain(className);
    // className in prop should be the last in the row
    expect(renderedClassNames.indexOf(className)).toBe(renderedClassNames.length - 1);
  });

  test('modal should close on pressing ESC', () => {
    const mockOnEscKeyDown = jest.fn();
    const { getByText } = render(
      <Modal.Dialog isOpen onEscKeyDown={mockOnEscKeyDown}>
        Content
      </Modal.Dialog>,
      { container: document.body },
    );
    const modalElement = getByText(/Content/)!;
    fireEvent.keyDown(modalElement, { key: 'Escape', code: 'Escape', keyCode: 27 });
    expect(mockOnEscKeyDown).toHaveBeenCalledTimes(1);
  });

  test('the modal should receive focus on open', () => {
    const { getByText } = render(<Modal.Dialog isOpen>Content</Modal.Dialog>, {
      container: document.body,
    });
    const modalElement = getByText(/Content/)!;
    expect(document.activeElement).toBe(modalElement);
  });
});
