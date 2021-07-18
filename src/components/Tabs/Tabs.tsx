import React, { ReactNode, useState } from 'react';
import classNames from 'classnames';

import cssReset from '../../css-reset.module.css';
import styles from './Tabs.module.css';

interface TabsContextValue {
  currentTabIndex: number;
  addTab: (title: string, index: number) => void;
  removeTab: (index: number) => void;
}

export const TabsContext = React.createContext<TabsContextValue | null>(null);

interface Props {
  currentTabIndex: number;
  onChange: (tabIndex: number) => void;
  className?: string;
  children?: ReactNode;
}

const Tabs: React.FC<Props> = ({ currentTabIndex, onChange, className, children }: Props) => {
  const [tabNames, setTabNames] = useState<string[]>([]);
  const mergedClassNames = classNames(cssReset.ventura, styles.tabs, className);

  const onTabNameClick = (tabIndex: number) => {
    if (onChange) {
      onChange(tabIndex);
    }
  };

  const addTab = (title: string, index: number) => {
    setTabNames((previousTabNames) => {
      const newTabNames = [...previousTabNames];
      newTabNames[index] = title;
      return newTabNames;
    });
  };

  const removeTab = (index: number) => {
    setTabNames((previousTabNames) => previousTabNames.splice(index, 1));
  };

  const tabsContextValues: TabsContextValue = {
    currentTabIndex,
    addTab,
    removeTab,
  };

  return (
    <TabsContext.Provider value={tabsContextValues}>
      <div className={mergedClassNames}>
        <div className={styles.header}>
          {tabNames.map((text, index) => (
            <button
              key={text}
              type="button"
              className={classNames(cssReset.ventura, styles.tabName, {
                [styles.active]: currentTabIndex === index,
              })}
              onClick={() => onTabNameClick(index)}
            >
              {text}
            </button>
          ))}
        </div>
      </div>
      {children}
    </TabsContext.Provider>
  );
};

export default Tabs;
