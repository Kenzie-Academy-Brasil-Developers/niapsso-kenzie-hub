import { Container, Content } from "./styles";

const Input = ({ label, error, ...rest }) => {
  return (
    <Container>
      <label>{label}</label>
      <Content isInvalid={!!error}>
        <input {...rest} />
      </Content>
      <div className="error--container">{!!error && <span>{error}</span>}</div>
    </Container>
  );
};

export default Input;
