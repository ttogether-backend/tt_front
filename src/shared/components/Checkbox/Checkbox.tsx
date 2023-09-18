import { Checkbox as BasicCheckbox, CheckboxWrapper, CustomCheckbox } from './Checkbox.styles';

interface CheckboxPropsType {
  id: string;
  label?: string;
  checked: boolean;
  onClick: () => void;
}

const Checkbox = (props: CheckboxPropsType) => {
  const { id, label, checked, onClick } = props;

  return (
    <CheckboxWrapper>
      <BasicCheckbox id={id} type="checkbox" checked={checked} />{' '}
      <CustomCheckbox htmlFor={id} isChecked={checked} onClick={onClick}>
        {label}
      </CustomCheckbox>
    </CheckboxWrapper>
  );
};

export default Checkbox;
