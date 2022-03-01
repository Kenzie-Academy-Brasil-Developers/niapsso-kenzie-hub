import { Wrapper, Container, Form } from "./styles";
import Logo from "./../../assets/Logo.png";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SelectInput from "./../../components/SelectInput";
import { kenzieHubApi } from "./../../services/api";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";

const Signup = ({ auth }) => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const options = [
    {
      value: "Primeiro módulo (Introdução ao Frontend)",
      label: "Primeiro módulo",
    },
    {
      value: "Segundo módulo (Frontend Avançado)",
      label: "Segundo módulo",
    },
    {
      value: "Terceiro módulo (Introdução ao Backend)",
      label: "Terceiro módulo",
    },
    {
      value: "Quarto módulo (Backend Avançado)",
      label: "Quarto módulo",
    },
  ];
  const history = useHistory();
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Mínimo de 6 digitos"),
    confirm_password: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "Senhas diferentes"),
    course_module: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ resolver: yupResolver(schema) });
  const handleSignup = async (data) => {
    delete data.confirm_password;
    await kenzieHubApi
      .post("/users", data)
      .then(() => {
        toast.success("Conta criada com sucesso!");
        history.push("/login");
      })
      .catch(() => toast.error("Ops! Algo deu errado"));
  };
  if (auth) {
    return <Redirect to="/" />;
  }
  return (
    <Wrapper>
      <div>
        <img alt="Kenzie Hub Login" src={Logo} />
        <button onClick={() => history.push("/login")}>Voltar</button>
      </div>
      <Container>
        <h3>Crie sua conta</h3>
        <h4>Rápido e grátis, vamos nessa</h4>
        <Form onSubmit={handleSubmit(handleSignup)}>
          <Input
            label="Nome"
            placeholder="Digite aqui seu nome"
            name="name"
            type="text"
            error={errors.name?.message}
            register={register}
          />
          <Input
            label="Email"
            placeholder="Digite aqui seu email"
            name="email"
            type="text"
            error={errors.email?.message}
            register={register}
          />
          <Input
            label="Senha"
            placeholder="Digite aqui sua senha"
            name="password"
            type={show ? "text" : "password"}
            onClick={() => setShow(!show)}
            iconBtn={{ icon: show ? FaEyeSlash : FaEye }}
            error={errors.password?.message}
            register={register}
          />
          <Input
            label="Confirmar senha"
            placeholder="Confirme sua senha aqui"
            name="confirm_password"
            type={show2 ? "text" : "password"}
            onClick={() => setShow2(!show2)}
            iconBtn={{ icon: show2 ? FaEyeSlash : FaEye }}
            error={errors.confirm_password?.message}
            register={register}
          />
          <Controller
            control={control}
            defaultValue={options[0].value}
            name="course_module"
            render={({ field: { onChange, value, ref } }) => (
              <SelectInput
                inputRef={ref}
                options={options}
                value={options.find((c) => c.value === value)}
                onChange={(val) => onChange(val.value)}
              />
            )}
          />
          <Input
            label="Contato"
            placeholder="linkedin/in/exemplo"
            name="contact"
            type="text"
            error={errors.contact?.message}
            register={register}
          />
          <Input
            label="Breve resumo seu"
            placeholder="Digite aqui sua bio"
            name="bio"
            type="text"
            error={errors.bio?.message}
            register={register}
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
      </Container>
    </Wrapper>
  );
};

export default Signup;
