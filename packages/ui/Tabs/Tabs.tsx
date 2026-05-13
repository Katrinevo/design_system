import React from "react";
import {
  TabsWrapper,
  Tab
} from "./Tabs.styles";
import { TabsProps }
from "./Tabs.types";

export const Tabs:
React.FC<TabsProps> = ({
  tabs
}) => (
  <TabsWrapper>
    {tabs.map((tab) => (
      <Tab
        key={tab.id}
        active={tab.active}
        disabled={tab.disabled}
      >
        {tab.label}
      </Tab>
    ))}
  </TabsWrapper>
);