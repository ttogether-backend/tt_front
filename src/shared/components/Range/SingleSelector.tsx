import { useEffect, useState } from 'react';
import { Container, RangeBox, SelectedStep, Step, StepValue, Line } from './Range.styles';
import { SingleSelectorPropsType, DataList, SingleItemPropsType } from './SingleSelector.types';

// 하나의 값만 선택하도록 하는 코드
export const SingleSelector: React.FC<SingleSelectorPropsType> = (
  props: SingleSelectorPropsType
) => {
  const { dataList, getSingleDataValue, singleDataValue } = props;
  const [singledata, setSingleData] = useState<DataList[]>(dataList);
  const [singleDataList, setSingleDataList] = useState([]);
  const [value, setValue] = useState<number>(singleDataValue);

  const onClick = (selectedValue: number) => {
    let updatedData = [];

    // 단일 값만 선택되도록 수정
    updatedData = dataList.map((data) => ({
      ...data,
      isSelected: data.value === selectedValue,
    }));
    setSingleData(updatedData);
    setValue(selectedValue);
  };

  useEffect(() => {
    getSingleDataValue(value);
    console.log('val', value);
  }, [value]);

  return (
    <>
      <Container>
        {singledata.map((data, index, array) => {
          return (
            <SingleSelectorItem
              key={index}
              data={data}
              index={index}
              dataList={array}
              onClick={onClick}
            />
          );
        })}
      </Container>
    </>
  );
};

const SingleSelectorItem: React.FC<SingleItemPropsType> = (props: SingleItemPropsType) => {
  const { data, index, dataList, onClick } = props;

  const selectedDataList = dataList.filter((data) => data.isSelected);
  const selectedItem = dataList.find((item) => item.value === data.value);
  return (
    <>
      <RangeBox key={data.value}>
        <div onClick={() => onClick(data.value)}>
          {selectedItem?.isSelected ? <SelectedStep /> : <Step />}
        </div>

        <StepValue>
          {selectedItem?.value}
          {selectedItem?.unit}
        </StepValue>
      </RangeBox>

      {dataList.length - 1 === index ? null : <Line isSelected={false} length={dataList.length} />}
    </>
  );
};
