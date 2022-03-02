import { Label, Wrapper } from "./styles";

const SelectInput = ({ options, label, register, name, ...rest }) => {
  return (
    <>
      <Label>{label}</Label>
      <Wrapper>
        <select {...register(name)} {...rest}>
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              label={option.label}
            />
          ))}
        </select>
      </Wrapper>
    </>
  );
};

export default SelectInput;
