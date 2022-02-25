import { Wrapper, Container, Form } from "./styles";
import Logo from "./../../assets/Logo.png";
import Input from "./../../components/Input";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {
  const [show, setShow] = useState(false);
  const history = useHistory();
  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup.string().required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const handleLogin = (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <Wrapper>
      <img alt="Kenzie Hub Logo" src={Logo} />
      <Container>
        <h3>Login</h3>
        <Form onSubmit={handleSubmit(handleLogin)}>
          <Input
            name="email"
            register={register}
            label="Email"
            placeholder="email@exemplo.com"
            error={errors.email?.message}
            type="text"
          />
          <Input
            name="password"
            register={register}
            label="Senha"
            placeholder="Digite aqui sua senha"
            error={errors.password?.message}
            iconBtn={{ icon: show ? FaEyeSlash : FaEye }}
            type={show ? "text" : "password"}
            onClick={() => setShow(!show)}
          />
          <Button type="submit">Entrar</Button>
        </Form>
        <h4>Ainda não possui uma conta?</h4>
        <Button bgColor="#868E96" onClick={() => history.push("/signup")}>
          Cadastre-se
        </Button>
      </Container>
    </Wrapper>
  );
};

export default Login;
