import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Radio from './Radio';

describe('Radio', () => {
  test('default snapshot', () => {
    const component = (
      <Radio.Group name="default" value="test1">
        <Radio.Item value="test1" label="Test option 1" />
        <Radio.Item value="test2" label="Test option 2" />
        <Radio.Item value="test3" label="Test option 3" />
      </Radio.Group>
    );
    const { asFragment } = render(component);
    expect(asFragment()).toMatchSnapshot();
  });

  test('description snapshot', () => {
    const component = (
      <Radio.Group name="default" value="test1">
        <Radio.Item value="test1" label="Test option 1" description="Lalalalalalala" />
        <Radio.Item value="test2" label="Test option 2" description="Lololololololo" />
        <Radio.Item value="test3" label="Test option 3" description="Lelelelelelele" />
      </Radio.Group>
    );
    const { asFragment } = render(component);
    expect(asFragment()).toMatchSnapshot();
  });

  test('onChange should trigger correctly', () => {
    const onChangeFn = jest.fn();

    const component = (
      <Radio.Group name="default" value="test1" onChange={onChangeFn}>
        <Radio.Item value="test1" label="Test option 1" />
        <Radio.Item value="test2" label="Test option 2" />
        <Radio.Item value="test3" label="Test option 3" />
      </Radio.Group>
    );
    const { getByTestId } = render(component);

    const radioButton1 = getByTestId('radio-default-test1');
    const radioButton2 = getByTestId('radio-default-test2');
    const radioButton3 = getByTestId('radio-default-test3');
    fireEvent.click(radioButton1);
    fireEvent.click(radioButton2);
    fireEvent.click(radioButton3);
    fireEvent.click(radioButton3);
    fireEvent.click(radioButton2);
    fireEvent.click(radioButton1);

    expect(onChangeFn).toHaveBeenCalledTimes(4);
  });

  test('disabled should block onChange', () => {
    const onChangeFn = jest.fn();

    const component = (
      <Radio.Group name="default" value="test1" onChange={onChangeFn}>
        <Radio.Item isDisabled value="test1" label="Test option 1" />
        <Radio.Item isDisabled value="test2" label="Test option 2" />
        <Radio.Item isDisabled value="test3" label="Test option 3" />
      </Radio.Group>
    );
    const { getByTestId } = render(component);

    const radioButton1 = getByTestId('radio-default-test1');
    const radioButton2 = getByTestId('radio-default-test2');
    const radioButton3 = getByTestId('radio-default-test3');
    fireEvent.click(radioButton1);
    fireEvent.click(radioButton2);
    fireEvent.click(radioButton3);

    expect(onChangeFn).toHaveBeenCalledTimes(0);
  });

  test('className prop', () => {
    const className = 'center';
    const component = (
      <Radio.Group name="default" value="test1">
        <Radio.Item className={className} value="test1" label="Test option 1" />
        <Radio.Item value="test2" label="Test option 2" />
        <Radio.Item value="test3" label="Test option 3" />
      </Radio.Group>
    );
    const { getByTestId } = render(component);
    const containerElement = getByTestId('default-test1-container');

    const renderedClassNames = containerElement.className.split(' ');
    expect(renderedClassNames).toContain(className);
    // className in prop should be the last in the row
    expect(renderedClassNames.indexOf(className)).toBe(renderedClassNames.length - 1);
  });
});
