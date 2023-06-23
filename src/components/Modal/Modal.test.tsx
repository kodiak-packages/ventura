import React from 'react';
import { fireEvent, getQueriesForElement, render } from '@testing-library/react';

import Modal from './Modal';

describe('Modal', () => {
  test('snapshot when shown', () => {
    // portals don't render in the fragment so we have look in baseElement
    // https://github.com/testing-library/react-testing-library/issues/62#issuecomment-513199414
    const { baseElement, rerender } = render(
      <Modal title="This is the title" isOpen>
        <span>Insert your text or form elements here</span>
        <Modal.Footer>Buttons are placed here</Modal.Footer>
      </Modal>,
    );
    expect(baseElement).toMatchSnapshot();

    rerender(
      <Modal title="This is the title" isOpen maxWidth="800px">
        <span>Insert your text or form elements here</span>
        <Modal.Footer>Buttons are placed here</Modal.Footer>
      </Modal>,
    );
    expect(baseElement).toMatchSnapshot();
  });

  test('snapshot when hidden', () => {
    const { baseElement } = render(<Modal>Invisible</Modal>);
    const modal = getQueriesForElement(baseElement).queryByTestId('modal');
    expect(modal).toBe(null);
  });

  test('className prop', () => {
    const className = 'center';
    const { baseElement } = render(
      <Modal isOpen className={className}>
        Content
      </Modal>,
    );
    const overlayElement = getQueriesForElement(baseElement).getByText(/Content/).parentElement!;

    const renderedClassNames = overlayElement.className.split(' ');
    expect(renderedClassNames).toContain(className);
    // className in prop should be the last in the row
    expect(renderedClassNames.indexOf(className)).toBe(renderedClassNames.length - 1);
  });

  test('modal should close on pressing ESC', () => {
    const mockOnEscKeyDown = jest.fn();
    const { baseElement } = render(
      <Modal isOpen onEscKeyDown={mockOnEscKeyDown}>
        Content
      </Modal>,
    );
    const modalElement = getQueriesForElement(baseElement).getByText(/Content/)!;
    fireEvent.keyDown(modalElement, { key: 'Escape', code: 'Escape', keyCode: 27 });
    expect(mockOnEscKeyDown).toHaveBeenCalledTimes(1);
  });

  test('the modal should receive focus on open', () => {
    const { baseElement } = render(<Modal isOpen>Content</Modal>);
    const modalElement = getQueriesForElement(baseElement).getByText(/Content/)!;
    expect(document.activeElement).toBe(modalElement);
  });
});
