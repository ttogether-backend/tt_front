import { useEffect, useMemo, useState } from 'react';
import { Container, Line, RangeBox, SelectedStep, Step, StepValue } from './Range.styles';
import { RangeDataList, RangeItemPropsType, RangePropsType } from './Range.types';

export const Range: React.FC<RangePropsType> = (props: RangePropsType) => {
  const { dataList, getRangeValue, rangeValue } = props;

  const [rangeData, setRangeData] = useState<RangeDataList[]>(dataList);
  const [value, setValue] = useState<number[]>([]);

  useEffect(() => {
    // 컴포넌트가 처음 마운트될 때, rangeValue의 초기값을 선택된 값으로 설정
    if (rangeValue) {
      setValue(rangeValue);
      const updatedData = rangeData.map((data) => ({
        ...data,
        isSelected: rangeValue.includes(data.value),
      }));
      setRangeData(updatedData);
    }
  }, [rangeValue]);

  const onClick = (selectedValue: number) => {
    let updatedData = [];
    if (value.length >= 2) {
      updatedData = rangeData.map((data) => {
        if (data.value === selectedValue) {
          return {
            ...data,
            isSelected: true,
          };
        }
        return {
          ...data,
          isSelected: false,
        };
      });

      setRangeData(updatedData);
      setValue([selectedValue]);
      return;
    }

    updatedData = rangeData.map((data) => {
      if (data.value === selectedValue) {
        return {
          ...data,
          isSelected: !data.isSelected,
        };
      }
      return data;
    });

    setRangeData(updatedData);
    setValue((prev) => [...prev, selectedValue]);
    getRangeValue(updatedData);
  };

  const selectedRangeData = useMemo(() => {
    if (value.length === 1) return rangeData;

    const sortedValue = value.sort();

    const updatedRangeData = rangeData.map((data) => {
      const isValueInRange = data.value >= sortedValue[0] && data.value <= sortedValue[1];

      if (isValueInRange) {
        return {
          ...data,
          isSelected: true,
        };
      }

      return data;
    });

    return updatedRangeData;
  }, [rangeData, value]);

  return (
    <>
      <Container>
        {selectedRangeData.map((data, index, array) => {
          return (
            <RangeItem
              key={data.value}
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

const RangeItem: React.FC<RangeItemPropsType> = (props: RangeItemPropsType) => {
  const { data, index, dataList, onClick } = props;

  const selectedDataList = dataList.filter((data) => data.isSelected);
  const lastItem = selectedDataList.find(
    (data, index, array) => data.value === array[array.length - 1].value
  );

  return (
    <>
      <RangeBox key={data.value}>
        <div onClick={() => onClick(data.value)}>
          {data.isSelected ? <SelectedStep /> : <Step />}
        </div>

        <StepValue>
          {data.value}
          {data.unit}
        </StepValue>
      </RangeBox>

      {dataList.length - 1 === index ? null : (
        <Line
          isSelected={lastItem?.value === data.value ? false : data.isSelected}
          length={dataList.length}
        />
      )}
    </>
  );
};
