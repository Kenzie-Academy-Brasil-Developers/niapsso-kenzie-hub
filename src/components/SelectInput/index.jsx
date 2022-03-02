import { Wrapper, Content } from "./styles";

const SelectInput = ({ options, ...rest }) => {
  return (
    <Wrapper {...rest}>
      {options.map((option) => (
        <Content key={option.value} value={option.value} label={option.label} />
      ))}
    </Wrapper>
  );
};

export default SelectInput;
