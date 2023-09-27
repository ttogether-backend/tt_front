export type DropdownItemProps = {
  itemList: ItemProps[];
  selectedItem: string[];
  getSelectedItem: (value: string[]) => void;
};

export type ItemProps = {
  name: string;
  isSelected: boolean;
}

export interface DropdownItemPropsType extends Pick<DropdownItemProps, 'itemList'> {
  data: ItemProps;
  index: number;
  onClick: (value: string) => void;
};