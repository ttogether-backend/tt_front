export interface SingleSelectorPropsType {
    dataList: DataList[];
    singleDataValue?: number;
    setSingleDataValue: (value: number) => void;
  }
  
  export interface DataList {
    value: number;
    unit?: string;
    isSelected: boolean;
  }
  
  export interface SingleItemPropsType extends Pick<SingleSelectorPropsType, 'dataList'> {
    data: DataList;
    index: number;
    onClick: (value: number) => void;
  }
  