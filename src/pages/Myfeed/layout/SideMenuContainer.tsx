import React, { useState } from 'react';
import SideMenu, { SideMenuItemIdType, SideMenuItemType } from '../components/SideMenu';
import { RowContainer } from './RowContainer';

interface SideMenuContainerProps {
  children: React.ReactNode;
  menuItemList: SideMenuItemType[];
}

interface SideMenuContentProps {
  children: React.ReactNode;
  menuId: SideMenuItemIdType;
}

const containerStyle = {
  width: '1408px',
  margin: '0 auto',
  padding: '136px 0px',
  justifyContent: 'flex-start',
  gap: '32px'
};

const contentStyle = {
  alignItems: 'flex-start',
  justifyContent: 'center',
};

export const SideMenuContent: React.FC<SideMenuContentProps> = ({
  children,
  menuId,
}: SideMenuContentProps) => {
  return (
    <RowContainer style={contentStyle} id={menuId}>
      {children}
    </RowContainer>
  );
};

export const SideMenuContainer: React.FC<SideMenuContainerProps> & {SideMenuContent: React.FC<SideMenuContentProps>} = ({ children, menuItemList }) => {
  const [activeMenuId, setActiveMenuId] = useState<SideMenuItemIdType>(menuItemList[0].id);

  return (
    <RowContainer style={containerStyle}>
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
    </RowContainer>
  );
};

SideMenuContainer.SideMenuContent = SideMenuContent;