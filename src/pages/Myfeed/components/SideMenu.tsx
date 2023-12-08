import styled from '@emotion/styled';

export interface SideMenuItemType {
  id: SideMenuItemIdType;
  label: string;
}

export type SideMenuItemIdType = string;

interface SideMenuProps {
  menuItemList: SideMenuItemType[];
  activeMenuId: SideMenuItemIdType;
  setActiveMenuId: (MyfeedMenuItemIdType) => void;
}

interface SideMenuItemProps {
  menuItem: SideMenuItemType;
  isActive: boolean;
  onClick: () => void;
}

const activeStyle: any = {
  background: '#F1F8F3',
  color: '#000',
  fontWeight: 700,
};

const defaultStyle: any = {
  background: '#FFF',
  color: '#868B91',
  fontWeight: 500,
};

const Container = styled.div`
  width: 326px;
  height: 558px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #ebebeb;
  background: #fff;
  padding: 32px;
`;

const ItemContainer = styled.li`
  display: flex;
  align-items: center;
  width: 262px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 10px;
  padding-left: 24px;
`;

const SideMenuItem = ({ menuItem, isActive, onClick }: SideMenuItemProps) => {
  return (
    <ItemContainer
      key={menuItem.id}
      onClick={onClick}
      style={isActive ? activeStyle : defaultStyle}
    >
      {menuItem.label}
    </ItemContainer>
  );
};

export const SideMenu = ({ menuItemList, activeMenuId, setActiveMenuId }: SideMenuProps) => {
  return (
    <Container>
      {menuItemList?.map((menuItem: SideMenuItemType) => (
        <SideMenuItem
          menuItem={menuItem}
          isActive={activeMenuId === menuItem.id}
          onClick={() => {
            setActiveMenuId(menuItem.id);
          }}
        />
      ))}
    </Container>
  );
};

export default SideMenu;
