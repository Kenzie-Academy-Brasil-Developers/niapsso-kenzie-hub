import Select from "react-select";

const SelectInput = ({ values, ...rest }) => (
  <Select options={values} {...rest} />
);

export default SelectInput;
