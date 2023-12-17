import styled from '@emotion/styled';
import { useNavigate } from 'react-router';

export interface SideMenuItemType {
  id: SideMenuItemIdType;
  label: string;
  path: string;
}

export type SideMenuItemIdType = string;

interface SideMenuProps {
  menuItemList: SideMenuItemType[];
  activeMenuId: SideMenuItemIdType;
}

interface SideMenuItemProps {
  menuItem: SideMenuItemType;
  isActive: boolean;
  onClick: () => void;
}

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
  cursor: pointer;
  background: #fff;
  color: #868b91;
  font-weight: 500;
  font-size: 16px;

  &.active {
    background: #F1F8F3;
    color: #000;
    font-weight: 700;
  }
  
  &:hover:not(.active){
    color: #000;
    font-weight: 700;
  }
`;

const SideMenuItem = ({ menuItem, isActive, onClick }: SideMenuItemProps) => {
  return (
    <ItemContainer key={menuItem.id} onClick={onClick} className={isActive ? 'active' : 'devault'}>
      {menuItem.label}
    </ItemContainer>
  );
};

export const SideMenu = ({ menuItemList, activeMenuId }: SideMenuProps) => {
  const navigate = useNavigate();

  return (
    <Container>
      {menuItemList?.map((menuItem: SideMenuItemType) => (
        <SideMenuItem
          menuItem={menuItem}
          isActive={activeMenuId === menuItem.id}
          onClick={() => {
            navigate(menuItem.path);
          }}
        />
      ))}
    </Container>
  );
};

export default SideMenu;
