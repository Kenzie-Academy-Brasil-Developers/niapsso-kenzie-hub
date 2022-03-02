import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import SelectInput from "../SelectInput";
import Button from "../Button";

const AddForm = ({ addTech }) => {
  const options = [
    {
      value: "Iniciante",
      label: "Iniciante",
    },
    {
      value: "Intermediário",
      label: "Intermediário",
    },
    {
      value: "Avançado",
      label: "Avançado",
    },
  ];
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ resolver: yupResolver(schema) });
  return (
    <form onSubmit={handleSubmit(addTech)}>
      <Input
        label="Nome"
        placeholder="Nome da tecnologia"
        name="title"
        type="text"
        error={errors.text?.message}
        register={register}
      />
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <SelectInput
            name="status"
            label="Selecionar status"
            register={register}
            options={options}
            value={options.find((c) => c.value === value)}
            onChange={(val) => onChange(val.value)}
          />
        )}
      />
      <Button type="submit">Cadastrar Tecnologia</Button>
    </form>
  );
};

export default AddForm;
