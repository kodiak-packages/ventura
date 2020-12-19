import React from 'react';
import { render } from '@testing-library/react';

import FormField from './FormField';

describe('FormField', () => {
  test('snapshot', () => {
    const { asFragment } = render(<FormField>Form elements here</FormField>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('errorMessage should be rendered', () => {
    const { queryByText } = render(
      <FormField errorMessage="Something went wrong">Form elements here</FormField>,
    );
    expect(queryByText(/Something went wrong/)).not.toBe(null);
  });

  test('undefined errorMessage should not be rendered', () => {
    const { queryByText } = render(
      <FormField errorMessage={undefined}>Form elements here</FormField>,
    );
    expect(queryByText(/undefined/)).toBe(null);
  });

  test('array of error messages should all be rendered', () => {
    const { queryByText } = render(
      <FormField errorMessage={['A first error', 'A second error', undefined]}>
        Form elements here
      </FormField>,
    );
    expect(queryByText(/A second error/)).not.toBe(null);
    expect(queryByText(/A first error/)).not.toBe(null);
    expect(queryByText(/undefined/)).toBe(null);
  });

  test('hint should be rendered', () => {
    const { queryByText } = render(
      <FormField hint={<span>You should look here</span>}>Form elements here</FormField>,
    );
    expect(queryByText(/You should look here/)).not.toBe(null);
  });

  test('className prop', () => {
    const className = 'center';
    const { getByText } = render(<FormField className={className}>Form elements here</FormField>);
    const formFieldElement = getByText(/Form elements here/)!;

    const renderedClassNames = formFieldElement.className.split(' ');
    expect(renderedClassNames).toContain(className);
    // className in prop should be the last in the row
    expect(renderedClassNames.indexOf(className)).toBe(renderedClassNames.length - 1);
  });
});
