import React, { useState } from "react";
import { MenuContainer, MenuItem } from "./MyfeedMenu.style";

const MyfeedMenu: React.FC<{menuPositionTop: number, menuPositionRight: number}> = ({menuPositionTop, menuPositionRight}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClickReport = () => {
    console.log("신고");
  }

  const onClickBlock = () => {
    console.log("차단");
  }

  return (
    <MenuContainer style={{
      top: `${menuPositionTop}px`,
      right: `${menuPositionRight}px`,
    }}>
      <MenuItem onClick={onClickReport}>신고</MenuItem>
      <MenuItem onClick={onClickBlock}>차단</MenuItem>
    </MenuContainer>
  );
};

export default MyfeedMenu;