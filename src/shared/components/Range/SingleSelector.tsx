import { useEffect, useState } from 'react';
import { Container, RangeBox, SelectedStep, Step, StepValue, Line } from './Range.styles';
import { SingleSelectorPropsType, DataList, SingleItemPropsType } from './SingleSelector.types';

// 하나의 값만 선택하도록 하는 코드
export const SingleSelector: React.FC<SingleSelectorPropsType> = (
  props: SingleSelectorPropsType
) => {
  const { dataList, setSingleDataValue, singleDataValue } = props;
  const [singledata, setSingleData] = useState<DataList[]>(dataList);
  const [value, setValue] = useState<number>(0); // 초기값을 0으로 설정

  const onClick = (selectedValue: number) => {
    let updatedData = [];

    updatedData = dataList.map((data) => ({
      ...data,
      isSelected: data.value === selectedValue,
    }));
    setSingleData(updatedData);
    setValue(selectedValue);

    setSingleDataValue(selectedValue);
  };

  useEffect(() => {
    let updatedData = [];
    console.log('singleDataValue', singleDataValue);
    updatedData = dataList.map((data) => ({
      ...data,
      isSelected: data.value === singleDataValue,
    }));
    setSingleData(updatedData);
    setValue(singleDataValue);

    setSingleDataValue(singleDataValue);
  }, [singleDataValue]);

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
