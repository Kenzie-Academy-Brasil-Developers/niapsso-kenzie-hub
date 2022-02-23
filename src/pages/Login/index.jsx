import { Wrapper, Container, Form } from "./styles";
import Logo from "./../../assets/Logo.png";
import Input from "./../../components/Input";

const Login = () => {
  return (
    <Wrapper>
      <img alt="Kenzie Hub Logo" src={Logo} />
      <Container>
        <h3>Login</h3>
        <Form>
          <Input
            label="Email"
            placeholder="email@exemplo.com"
            error="Campo obrigatório!"
          />
          <Input label="Senha" placeholder="Digite aqui sua senha" />
        </Form>
      </Container>
    </Wrapper>
  );
};

export default Login;
