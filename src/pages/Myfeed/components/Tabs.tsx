import React from 'react';
import { FlexContainer } from '../layout/FlexContainer';
import styled from '@emotion/styled';

interface TabProps {
  label: string;
  readonly key?: string;
  readonly className?: string;
  readonly onClick?: () => void;
}

interface TabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (newValue: number) => void;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const StyledTab = styled.div`
  cursor: pointer;
  padding: 16px 24px;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  color: #868b91;

  &.active {
    border-radius: 10px;
    background: #f0f9ec;
    color: black;
  }

  &:hover:not(.active) {
    color: #000;
    font-weight: 600;
  }
`;

export const TabPanel: React.FC<TabPanelProps> = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <FlexContainer>{value === index && children}</FlexContainer>
    </div>
  );
};

export const Tab = ({ label, key, className, onClick }: TabProps) => {
  return (
    <StyledTab key={key} className={className} onClick={onClick}>
      {label}
    </StyledTab>
  );
};

export const Tabs: React.FC<TabsProps> & {
  Tab: React.FC<TabProps>;
} = ({ children, value, onChange }) => {
  return (
    <FlexContainer>
      {React.Children.map(children, (child: React.ReactNode, index: number) => {
        return React.cloneElement(child as JSX.Element, {
          key: `tab-child-${index}`,
          className: value === index ? 'active' : 'default',
          onClick: () => {
            onChange(index);
          },
        });
      })}
    </FlexContainer>
  );
};

Tabs.Tab = Tab;