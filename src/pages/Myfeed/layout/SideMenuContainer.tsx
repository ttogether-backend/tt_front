import React from 'react';
import SideMenu, { SideMenuItemIdType, SideMenuItemType } from '../components/SideMenu';
import { FlexContainer } from './FlexContainer';

interface SideMenuContainerProps {
  children: React.ReactNode;
  menuItemList: SideMenuItemType[];
  activeMenuId: SideMenuItemIdType;
}

const containerStyle = {
  margin: '0 auto',
  padding: '136px 0px',
};

export const SideMenuContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <FlexContainer
      direction="row"
      alignItems="flex-start"
      justifyContent="flex-start"
      width={'100%'}
    >
      {children}
    </FlexContainer>
  );
};

export const SideMenuContainer: React.FC<SideMenuContainerProps> & {
  SideMenuContent: React.FC<{ children: React.ReactNode }>;
} = ({ children, menuItemList, activeMenuId }) => {
  return (
    <FlexContainer
      direction="row"
      justifyContent="center"
      gap={32}
      style={containerStyle}
      width={'1408px'}
    >
      <SideMenu menuItemList={menuItemList} activeMenuId={activeMenuId} />
      {children}
    </FlexContainer>
  );
};

SideMenuContainer.SideMenuContent = SideMenuContent;
