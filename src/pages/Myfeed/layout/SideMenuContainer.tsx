import React, { useState } from 'react';
import SideMenu, { SideMenuItemIdType, SideMenuItemType } from '../components/SideMenu';
import { FlexContainer } from './FlexContainer';

interface SideMenuContainerProps {
  children: React.ReactNode;
  menuItemList: SideMenuItemType[];
}

interface SideMenuContentProps {
  children: React.ReactNode;
  menuId: SideMenuItemIdType;
}

const containerStyle = {
  margin: '0 auto',
  padding: '136px 0px',
};

export const SideMenuContent: React.FC<SideMenuContentProps> = ({
  children,
  menuId,
}: SideMenuContentProps) => {
  return (
    <FlexContainer direction="row" alignItems="flex-start" justifyContent="flex-start" width={'100%'} id={menuId}>
      {children}
    </FlexContainer>
  );
};

export const SideMenuContainer: React.FC<SideMenuContainerProps> & {
  SideMenuContent: React.FC<SideMenuContentProps>;
} = ({ children, menuItemList }) => {
  const [activeMenuId, setActiveMenuId] = useState<SideMenuItemIdType>(menuItemList[0].id);

  return (
    <FlexContainer
      direction="row"
      justifyContent="center"
      gap={32}
      style={containerStyle}
      width={'1408px'} 
    >
      <SideMenu
        menuItemList={menuItemList}
        activeMenuId={activeMenuId}
        setActiveMenuId={setActiveMenuId}
      />

      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const childId = (child.props as SideMenuContentProps).menuId;
          if (childId === activeMenuId) {
            return child;
          }
        }
        return null;
      })}
    </FlexContainer>
  );
};

SideMenuContainer.SideMenuContent = SideMenuContent;
