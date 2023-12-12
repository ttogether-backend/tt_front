import React, {useState, useEffect, useRef} from "react";
import { DropdownProps } from "./Dropdown.type";
import * as Style from "./Dropdown.style";


const Dropdown: React.FC<DropdownProps> = (props: DropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }
  const [isChoicedItem, setIsChoicedItem] = useState<boolean>(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if(props.choicedItem && props.choicedItem.length > 0) {
      setIsChoicedItem(true);
    }
  }, [props.choicedItem]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // 드롭다운 밖을 클릭하면 드롭다운을 닫습니다.
      }
    };

    // 클릭 이벤트 리스너를 추가
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <Style.DropdownContainer ref={dropdownRef}>
      <Style.DropdownButton isOpen={isDropdownOpen} choicedItem={isChoicedItem} onClick={toggleDropdown}>
        {props.choicedItem && props.choicedItem.length > 0 ? props.dropdownText : props.dropdownTitle}
      </Style.DropdownButton>
      {isDropdownOpen && (
        <Style.DropdownContentContainer>
          <Style.Title>{props.dropdownTitle}</Style.Title>
          {props.children}
        </Style.DropdownContentContainer>
      )}
    </Style.DropdownContainer>
  )

}

export default Dropdown;