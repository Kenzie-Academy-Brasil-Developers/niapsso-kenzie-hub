import Select from "react-select";

const SelectInput = ({ ...rest }) => {
  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "#343B41",
      borderColor: state.isFocused ? "#343B41" : "#F8F9FA",
    }),
  };
  return <Select styles={customStyles} {...rest} />;
};

export default SelectInput;
