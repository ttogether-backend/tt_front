export interface RangePropsType {
  dataList: RangeDataList[];
  rangeValue?: number[];
  getRangeValue: (value: number[]) => void;
}

export interface RangeDataList {
  value: number;
  unit?: string;
  isSelected: boolean;
}

export interface RangeItemPropsType extends Pick<RangePropsType, 'dataList'> {
  data: RangeDataList;
  index: number;
  onClick: (value: number) => void;
}
