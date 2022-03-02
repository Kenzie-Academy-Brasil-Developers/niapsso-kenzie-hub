import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import SelectInput from "../SelectInput";
import Button from "../Button";

const EditForm = ({ techEditing, deleteTech, editTech }) => {
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
    <form onSubmit={handleSubmit(editTech)}>
      <Input
        label="Nome do projeto"
        placeholder={techEditing.title}
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
      <div className="btn--container">
        <Button type="submit">Salvar alterações</Button>
        <Button bgColor="#868E96" onClick={deleteTech}>
          Excluir
        </Button>
      </div>
    </form>
  );
};

export default EditForm;
