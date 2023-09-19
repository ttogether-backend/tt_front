import { Checkbox as BasicCheckbox, CheckboxWrapper, CustomCheckbox } from './Checkbox.styles';

interface CheckboxPropsType {
  id: string;
  label?: string;
  checked: boolean;
  onChange: () => void;
}

const Checkbox = (props: CheckboxPropsType) => {
  const { id, label, checked, onChange } = props;

  return (
    <CheckboxWrapper>
      <BasicCheckbox id={id} type="checkbox" checked={checked} onChange={onChange} />{' '}
      <CustomCheckbox htmlFor={id} isChecked={checked}>
        {label}
      </CustomCheckbox>
    </CheckboxWrapper>
  );
};

export default Checkbox;
