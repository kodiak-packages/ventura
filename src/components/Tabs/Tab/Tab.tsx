import React, { ReactNode, useContext, useEffect } from 'react';
import classNames from 'classnames';

import { TabsContext } from '../Tabs';

import cssReset from '../../../css-reset.module.css';
import styles from './Tab.module.css';

export interface Props {
  title: string;
  index: number;
  className?: string;
  children: ReactNode;
}

const Tab: React.FC<Props> = ({ title, index, className, children }: Props) => {
  const tabsContext = useContext(TabsContext);

  useEffect(() => {
    if (!tabsContext) return undefined;

    tabsContext.addTab(title, index);

    return () => {
      tabsContext.removeTab(index);
    };
  }, [title, index]);

  if (tabsContext === null) {
    // eslint-disable-next-line no-console
    console.warn(`The ${title} Tab component needs to wrapped in a Tabs component.`);
    return null;
  }

  const mergedClassNames = classNames(cssReset.ventura, styles.tab, className);

  return tabsContext.currentTabIndex === index ? (
    <div className={mergedClassNames}>{children}</div>
  ) : null;
};

export default Tab;
