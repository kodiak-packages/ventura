import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Tab from './Tab/Tab';
import Tabs from './Tabs';

describe('Tabs', () => {
  const defaultProps = {
    currentTabIndex: 0,
    onChange: jest.fn(),
  };

  const createComponent = (props: Omit<React.ComponentProps<typeof Tabs>, 'children'>) => (
    <Tabs {...props}>
      <Tab title="First" index={0}>
        This is the first tab
      </Tab>
      <Tab title="Second" index={1}>
        This is the second tab
      </Tab>
      <Tab title="Third" index={2}>
        This is the third tab
      </Tab>
    </Tabs>
  );

  test('default snapshot', () => {
    const { asFragment } = render(createComponent(defaultProps));
    expect(asFragment()).toMatchSnapshot();
  });

  test('onChange should trigger when another tab is clicked', () => {
    const { getByText } = render(createComponent(defaultProps));
    const secondTab = getByText(/Second/);
    fireEvent.click(secondTab);
    expect(defaultProps.onChange).toHaveBeenNthCalledWith(1, 1);
  });

  test('Second tab should be visible', () => {
    const { queryByText } = render(createComponent({ ...defaultProps, currentTabIndex: 1 }));
    const firstTab = queryByText(/This is the first tab/);
    const secondTab = queryByText(/This is the second tab/);
    expect(firstTab).toBe(null);
    expect(secondTab).not.toBe(null);
  });

  test('className prop', () => {
    const className = 'center';
    const { getByText } = render(createComponent({ ...defaultProps, className }));
    const tabsElement = getByText(/First/).parentElement?.parentElement!;

    const renderedClassNames = tabsElement.className.split(' ');
    expect(renderedClassNames).toContain(className);
    // className in prop should be the last in the row
    expect(renderedClassNames.indexOf(className)).toBe(renderedClassNames.length - 1);
  });
});
