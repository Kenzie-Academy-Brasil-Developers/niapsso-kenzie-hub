import { Container, Content } from "./styles";

const Input = ({
  label,
  error,
  iconBtn,
  onClick,
  register,
  name,
  type,
  ...rest
}) => {
  return (
    <Container>
      <label>{label}</label>
      <Content isInvalid={!!error}>
        <input
          {...register(name)}
          type={type}
          {...rest}
          autoComplete="new-password"
        />
        {iconBtn && (
          <button type="button" onClick={onClick}>
            {<iconBtn.icon />}
          </button>
        )}
      </Content>
      <div className="error--container">{!!error && <span>{error}</span>}</div>
    </Container>
  );
};

export default Input;
