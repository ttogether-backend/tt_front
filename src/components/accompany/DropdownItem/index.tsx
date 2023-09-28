import React, {useState, useEffect, useMemo} from "react";
import * as Style from "./DropdownItem.style";
import { DropdownItemProps, DropdownItemPropsType, ItemProps } from "./DropdownItem.type";

const DropdownItem: React.FC<DropdownItemProps> = (props: DropdownItemProps) => {
  const [itemList, setItemList] = useState<ItemProps[]>(props.itemList);

  const [value, setValue] = useState<string[]>(props.selectedItem);

  const onClick = (selectedValue: string) => {
    let updatedData = [];
  
    if (value.includes(selectedValue)) { // selectedValue가 이미 value 배열에 존재하는 경우 해당 값을 배열에서 제거
      setValue(prev => prev.filter(val => val !== selectedValue));
      setItemList(prev => prev.map(data => data.name === selectedValue ? {...data, isSelected: false} : data));
      return;
    }
  
    updatedData = itemList.map((data) => {
      if (data.name === selectedValue) {
        return {
          ...data,
          isSelected: !data.isSelected,
        };
      }
      return data;
    });
  
    setItemList(updatedData);
    setValue((prev) => [...prev, selectedValue]);
  }
  

  const selectedDropdownData = useMemo(() => {
    const updatedDropdownData = itemList.map((data) => {
      const isSelected = value.includes(data.name);
  
      return {
        ...data,
        isSelected: isSelected,
      };
    });
  
    return updatedDropdownData;
  }, [itemList, value]);

  useEffect(() => {
    props.getSelectedItem(value);
  }
  , [value]);

  return (
    <Style.DropdownItemContainer>
      {selectedDropdownData.map((data, index) => (
        <RangeItem
          key={data.name}
          data={data}
          index={index}
          itemList={itemList}
          onClick={onClick}
        />
      ))}
    </Style.DropdownItemContainer>
  )
}

const RangeItem: React.FC<DropdownItemPropsType> = (props: DropdownItemPropsType) => {
  const { data, index, itemList, onClick } = props;

  const selectedDataList = itemList.filter((data) => data.isSelected);
  const lastItem = selectedDataList.find(
    (data, index, array) => data.name === array[array.length - 1].name
  );
  return (
    <>
      <Style.DropdownItemText key={data.name} isSelected={data.isSelected} type={data.name} onClick={() => onClick(data.name)}>
        {data.name === "TRAVEL" ? "여행" : data.name === "CULTURE" ? "문화" : "음식"}
      </Style.DropdownItemText>
    </>
  );
};


export default DropdownItem;